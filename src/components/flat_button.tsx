import React, { CSSProperties, ReactNode } from 'react'

interface FlatButtonProps {
  color?: string
  children?: ReactNode
  className?: string
}
export default function FlatButton({ children, className, color = "color-mix(in srgb, var(--primary) 80%, transparent)" }: FlatButtonProps) {
  return (
    <button
      style={{ "--color": color } as CSSProperties}
      className={`
        bg-[var(--color)] text-white py-4 px-8 rounded-2xl border font-semibold duration-300
        hover:bg-white hover:border-[var(--color)] hover:text-[var(--color)]
        ${className}
      `}
    >
      {children}
    </button>
  )
}
