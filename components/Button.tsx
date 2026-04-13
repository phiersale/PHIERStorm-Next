'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
  fullWidth?: boolean
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  type = 'button',
  className = '',
  disabled = false,
  fullWidth = false
}: ButtonProps) {
  const baseClasses = `btn btn-${variant} ${fullWidth ? 'w-full' : ''} ${className}`
  
  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    )
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
