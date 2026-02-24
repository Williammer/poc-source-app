import { useState, useCallback } from 'react'
import { safeDivide } from '../lib/utils'

export type Operation = 'add' | 'subtract' | 'multiply' | 'divide'

export interface CalculatorState {
  display: string
  previousValue: number | null
  operation: Operation | null
  waitingForOperand: boolean
}

export function useCalculator() {
  const [state, setState] = useState<CalculatorState>({
    display: '0',
    previousValue: null,
    operation: null,
    waitingForOperand: false,
  })

  const inputDigit = useCallback((digit: string) => {
    setState((prev) => {
      if (prev.waitingForOperand) {
        return {
          ...prev,
          display: digit,
          waitingForOperand: false,
        }
      }
      return {
        ...prev,
        display: prev.display === '0' ? digit : prev.display + digit,
      }
    })
  }, [])

  const inputDecimal = useCallback(() => {
    setState((prev) => {
      if (prev.waitingForOperand) {
        return {
          ...prev,
          display: '0.',
          waitingForOperand: false,
        }
      }
      if (prev.display.includes('.')) {
        return prev
      }
      return {
        ...prev,
        display: prev.display + '.',
      }
    })
  }, [])

  const clear = useCallback(() => {
    setState({
      display: '0',
      previousValue: null,
      operation: null,
      waitingForOperand: false,
    })
  }, [])

  const performOperation = useCallback((nextOperation: Operation) => {
    setState((prev) => {
      const inputValue = parseFloat(prev.display)

      if (prev.previousValue === null) {
        return {
          ...prev,
          previousValue: inputValue,
          operation: nextOperation,
          waitingForOperand: true,
        }
      }

      if (prev.waitingForOperand) {
        return {
          ...prev,
          operation: nextOperation,
        }
      }

      const result = calculate(prev.previousValue, inputValue, prev.operation!)

      return {
        display: String(result),
        previousValue: result,
        operation: nextOperation,
        waitingForOperand: true,
      }
    })
  }, [])

  const equals = useCallback(() => {
    setState((prev) => {
      if (prev.previousValue === null || prev.operation === null) {
        return prev
      }

      const inputValue = parseFloat(prev.display)
      const result = calculate(prev.previousValue, inputValue, prev.operation!)

      return {
        display: String(result),
        previousValue: null,
        operation: null,
        waitingForOperand: true,
      }
    })
  }, [])

  return {
    display: state.display,
    inputDigit,
    inputDecimal,
    clear,
    performOperation,
    equals,
  }
}

function calculate(a: number, b: number, operation: Operation): number {
  switch (operation) {
    case 'add':
      return a + b
    case 'subtract':
      return a - b
    case 'multiply':
      return a * b
    case 'divide':
      return safeDivide(a, b)
    default:
      return b
  }
}
