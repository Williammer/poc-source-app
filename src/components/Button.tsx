import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: 'primary' | 'secondary' | 'danger'
  className?: string
  disabled?: boolean
  'data-testid'?: string
}

export function Button({
  children,
  onClick,
  variant = 'secondary',
  className = '',
  disabled = false,
  'data-testid': dataTestId,
}: ButtonProps) {
  const baseStyles =
    'px-4 py-2 rounded font-medium transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed'

  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      data-testid={dataTestId}
    >
      {children}
    </button>
  )
}
