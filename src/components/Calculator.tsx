import React from 'react'
import { useCalculator } from '../hooks/useCalculator'
import { Button } from './Button'

export function Calculator() {
  const { display, inputDigit, inputDecimal, clear, performOperation, equals } =
    useCalculator()

  const handleDigitClick = (digit: string) => {
    inputDigit(digit)
  }

  const handleOperationClick = (operation: 'add' | 'subtract' | 'multiply' | 'divide') => {
    performOperation(operation)
  }

  return (
    <div className="calculator" data-testid="calculator">
      <div className="display" data-testid="display">
        {display}
      </div>

      <div className="buttons">
        <Button onClick={clear} variant="danger" data-testid="clear">
          C
        </Button>
        <Button
          onClick={() => handleOperationClick('divide')}
          data-testid="divide"
        >
          ÷
        </Button>
        <Button
          onClick={() => handleOperationClick('multiply')}
          data-testid="multiply"
        >
          ×
        </Button>
        <Button
          onClick={() => handleOperationClick('subtract')}
          data-testid="subtract"
        >
          −
        </Button>

        <Button onClick={() => handleDigitClick('7')} data-testid="digit-7">
          7
        </Button>
        <Button onClick={() => handleDigitClick('8')} data-testid="digit-8">
          8
        </Button>
        <Button onClick={() => handleDigitClick('9')} data-testid="digit-9">
          9
        </Button>
        <Button
          onClick={() => handleOperationClick('add')}
          variant="primary"
          data-testid="add"
        >
          +
        </Button>

        <Button onClick={() => handleDigitClick('4')} data-testid="digit-4">
          4
        </Button>
        <Button onClick={() => handleDigitClick('5')} data-testid="digit-5">
          5
        </Button>
        <Button onClick={() => handleDigitClick('6')} data-testid="digit-6">
          6
        </Button>
        <Button onClick={equals} variant="primary" data-testid="equals">
          =
        </Button>

        <Button onClick={() => handleDigitClick('1')} data-testid="digit-1">
          1
        </Button>
        <Button onClick={() => handleDigitClick('2')} data-testid="digit-2">
          2
        </Button>
        <Button onClick={() => handleDigitClick('3')} data-testid="digit-3">
          3
        </Button>
        <Button onClick={() => handleDigitClick('0')} data-testid="digit-0">
          0
        </Button>

        <Button onClick={inputDecimal} data-testid="decimal">
          .
        </Button>
      </div>

      <style>{`
        .calculator {
          max-width: 300px;
          margin: 0 auto;
          padding: 20px;
          background: #f5f5f5;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .display {
          background: #fff;
          padding: 20px;
          margin-bottom: 20px;
          text-align: right;
          font-size: 2rem;
          font-family: monospace;
          border-radius: 5px;
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .buttons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        button {
          padding: 15px;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  )
}
