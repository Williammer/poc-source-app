/**
 * Utility functions for the calculator
 */

export function formatNumber(value: number): string {
  return value.toLocaleString('en-US', {
    maximumFractionDigits: 10,
  })
}

export function safeDivide(a: number, b: number): number {
  if (b === 0) {
    return Infinity
  }
  return a / b
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value)
}
