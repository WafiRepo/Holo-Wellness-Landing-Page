import React from 'react'
import icon from "../../images/icon.png"
import useSiteMetadata from '../../hooks/useSiteMetadata'
import { Link } from 'gatsby'
import approaches from "../../data/approaches.json"
import services from "../../data/services.json"
import learningCenters from "../../data/learning-centers.json"
import NavItem from './nav_item'
import NavLinkChildren, { NavLink } from './nav_link_children'
import { MdMenu } from "react-icons/md"

interface NavbarProps {
  pathname: string
}
export default function Navbar({ pathname }: NavbarProps) {
  if (pathname === "") pathname = "/"
  
  const { title } = useSiteMetadata()
  const { style: scrolledStyle } = useScrolledClass()
  const approachLinkChildren = approaches.map((approach) => {
    return { to: `detail-approach#${approach.slug}`, text: approach.name }
  })
  const learningCenterLinkChildren: NavLink[] = learningCenters.map((learningCenter) => {
    return { text: learningCenter.name, to: `learning-center#${learningCenter.slug}` }
  })
  const servicesLinkChildren: NavLink[] = [
    {
      text: "Individuals",
      children: services.individuals.map((service) => {
        const text = service.name
        const to = `detail-services#${service.slug}`
        return { text, to }
      })
    },
    {
      text: "Employers",
      children: services.employers.map((service) => {
        const text = service.name
        const to = `detail-services#${service.slug}`
        return { text, to }
      })
    }
  ]
  
  return (
    <div className={`
      fixed top-0 left-0 pl-6 p-3 h-24 rounded-br-[2.5rem] flex items-center duration-200 z-10
      max-sm:w-screen max-sm:rounded-none max-sm:h-20 max-sm:px-4
      ${scrolledStyle}
    `}>
      <Link to='/' className='flex'>
        <img src={icon} alt={title} className='h-12 w-12' />
        <h1 className='
          font-bold text-xl pl-4 pr-6 py-2 border-r-neutral-400 border-r-2
          max-sm:hidden
        '>
          {title.toUpperCase()}
        </h1>
      </Link>
      <div className="relative h-full max-sm:hidden">
        <ul className='flex items-center h-full px-2'>
          <NavItem hash={pathname} to='/'>Home</NavItem>
          <NavItem hash={pathname} to='/services/'>
            Services
            <NavLinkChildren links={servicesLinkChildren} />
          </NavItem>
          <NavItem hash={pathname}>
            Approach
            <NavLinkChildren links={approachLinkChildren} />
          </NavItem>
          <NavItem hash={pathname}>
            Learning Center
            <NavLinkChildren links={learningCenterLinkChildren} />
          </NavItem>
          <NavItem hash={pathname} to='/about/' isLast>About</NavItem>
        </ul>
      </div>

      <button className='sm:hidden ml-auto'>
        <MdMenu className='text-2xl text-neutral-500' />
      </button>
    </div>
  )
}

function useScrolledClass() {

  const scrolledClass = "bg-white shadow-xl"

  return { style: scrolledClass, isScrolled: true }
}