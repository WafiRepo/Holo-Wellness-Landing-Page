import { Link } from "gatsby"
import React from "react"
import { v4 } from "uuid"

export interface NavLink {
  to?: string
  text: string
  children?: NavLink[]
}
interface NavLinkChildrenProps {
  links: NavLink[]
}
function NavLinkChildren({ links }: NavLinkChildrenProps) {
  return (
    <div className={`
      bg-white shadow-lg flex invisible flex-col top-16 absolute duration-200
      opacity-0 text-neutral-600 font-normal
    `}>
      {links.map((link) => {
        const key = v4()
        return <NavLinkChild key={key} link={link} />
      })}
    </div>
  )
}

interface NavLinkChildProps {
  link: NavLink
}
function NavLinkChild({ link }: NavLinkChildProps) {
  if (!link.children) {
    return (
      <Link
        key={link.to} to={`/${link.to!}`}
        className='
          border-b border-b-neutral-400 text-left py-4 px-6 hover:bg-neutral-200
          duration-200
        '
      >
        {link.text}
      </Link>
    )
  }

  return (
    <div
      className='
        border-b border-b-neutral-400 text-left py-4 px-6 hover:bg-neutral-200
        duration-200 relative [&:hover>div]:visible [&:hover>div]:opacity-100 select-none
      '
    >
      {link.text}
      <div className={`
        bg-white shadow-lg flex invisible flex-col absolute duration-200
        opacity-0 w-max top-0 left-full max-w-64
      `}>
        {link.children.map((link) => {
          const key = v4()
          return <NavLinkChild key={key} link={link} />
        })}
      </div>
    </div>
  )
}

export default NavLinkChildren