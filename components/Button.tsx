// FILE: components/Button.tsx - UPDATED

import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
  className?: string
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  type = 'button',
  fullWidth = false,
  className = ''
}: ButtonProps) {
  const baseClasses = `btn-${variant} ${fullWidth ? 'w-full' : ''} ${className}`
  
  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    )
  }
  
  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  )
}
