import { Link } from "gatsby"
import React, { ReactNode } from "react"

interface NavItemProps {
  to?: string
  children?: ReactNode
  hash: string
  isLast?: boolean
}
function NavItem({ to, children, hash, isLast = false }: NavItemProps) {
  const isSelected = hash === to
  const linkStyle = isSelected
      ? "font-bold text-primary"
      : "text-neutral-600 pt-1 hover:pb-4"

  const pStyle = isSelected ? "border-b border-b-primary" : ""

  // OPTIMIZE: remove duplicate code
  if (to) {
    return (
      <li className='h-full'>
        <Link to={to} className={`
          h-full flex items-center text-center px-4 w-max duration-200 select-none
          [&:hover>div>div]:visible [&:hover>div>div]:opacity-100
          ${isLast ? "rounded-br-3xl" : ""}
          ${linkStyle}
        `}>
          <div className={`py-2 ${pStyle}`}>
            {children}
          </div>
        </Link>
      </li>
    )
  }
  
  return (
    <li className='h-full'>
      <div className={`
        h-full flex items-center text-center px-4 w-max duration-200 select-none
        [&:hover>div>div]:visible [&:hover>div>div]:opacity-100
        ${isLast ? "rounded-br-3xl" : ""}
        ${linkStyle}
      `}>
        <div className={`py-2 ${pStyle}`}>
          {children}
        </div>
      </div>
    </li>
  )
}

export default NavItem