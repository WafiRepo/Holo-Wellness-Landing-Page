import { HeadFC, PageProps } from 'gatsby'
import React, { useState } from 'react'
import useSiteMetadata from '../hooks/useSiteMetadata'
import banner from "../images/services-banner.jpg"
import Navbar from '../components/navbar'
import allServices from "../data/services.json"

export const Head: HeadFC = () => {
  const { title } = useSiteMetadata()
  return <title>{title} | Services</title>
}

export default function Services({ location }: PageProps) {
  return (
    <main>
      <Navbar pathname={location.pathname} />
      <Banner />
      <IndividualServices hash={location.hash} />
      <EmployersServices hash={location.hash} />
    </main>
  )
}

function Banner() {
  return (
    <>
      <div className='bg-primary-lightest w-full h-72 flex justify-end items-end'>
        <img
          src={banner} alt="Services"
          className='rounded-3xl w-[42rem] h-[24rem] absolute m-8 object-cover top-24 left-0'
        />
        <div className='w-1/2'>
          <h1 className='text-primary text-6xl font-semibold pb-12'>
            Our Services
          </h1>
        </div>
      </div>
      <div className='flex justify-end h-64'>
        <div className='w-1/2 p-6 pl-0'>
          <p className='w-[32rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime suscipit voluptatem, accusamus sint commodi deleniti fugit quia ducimus odit tempore eos quidem dignissimos?</p>
        </div>
      </div>
    </>
  )
}

interface ServicesListProps {
  hash: string
}
function IndividualServices({ hash: hashRaw }: ServicesListProps) {
  const hash = hashRaw.replaceAll('#', '')
  // TODO: scroll to selected
  const services = allServices.individuals
  const [selectedSlug, setSelectedSlug] = useState(services[0].slug)
  const selectedService = services.find((service) => service.slug === selectedSlug)

  const handleSelect: React.MouseEventHandler<HTMLLIElement> = (e) => {
    const slug = e.currentTarget.id
    setSelectedSlug(slug)
  }
  
  return (
    <div className='py-24 px-28'>
      <h1 className='text-4xl font-semibold text-primary'>Individual Services</h1>

      <div className="flex pt-8">
        <ul className='pr-12 w-[32rem]'>
          {services.map((service) => {
            const isSelected = service.slug === selectedSlug
            
            return (
              <li
                key={service.slug} id={service.slug}
                onClick={handleSelect}
                className={`
                  py-4 px-8 border-b border-b-neutral-400 cursor-pointer hover:bg-primary-lightest
                  duration-200
                  ${isSelected ? "!bg-primary-light" : ""}
                `}
              >
                {service.name}
              </li>
            )
          })}
        </ul>
        <div className='flex-1 border-l border-l-neutral-400 pl-8'>
          <img
            src={selectedService?.image} alt={selectedService?.name}
            className='rounded-2xl object-cover h-[18rem] w-[32rem]'
          />
          <p className='pt-8 w-[42rem]'>{selectedService?.description}</p>
        </div>
      </div>
    </div>
  )
}

function EmployersServices({ hash: hashRaw }: ServicesListProps) {
  const hash = hashRaw.replaceAll('#', '')
  // TODO: scroll to selected
  const services = allServices.employers
  const [selectedSlug, setSelectedSlug] = useState(services[0].slug)
  const selectedService = services.find((service) => service.slug === selectedSlug)

  const handleSelect: React.MouseEventHandler<HTMLLIElement> = (e) => {
    const slug = e.currentTarget.id
    setSelectedSlug(slug)
  }
  
  return (
    <div className='py-24 px-28 bg-neutral-100 pr-48'>
      <h1 className='text-4xl font-semibold text-primary text-right'>Employers Services</h1>

      <div className="flex pt-8 flex-row-reverse">
        <ul className='pl-12 w-[32rem]'>
          {services.map((service) => {
            const isSelected = service.slug === selectedSlug
            
            return (
              <li
                key={service.slug} id={service.slug}
                onClick={handleSelect}
                className={`
                  py-4 px-8 border-b border-b-neutral-400 cursor-pointer hover:bg-primary-lightest
                  duration-200
                  ${isSelected ? "!bg-primary-light" : ""}
                `}
              >
                {service.name}
              </li>
            )
          })}
        </ul>
        <div className='flex-1 border-r border-r-neutral-400 pr-8 flex flex-col items-end'>
          <img
            src={selectedService?.image} alt={selectedService?.name}
            className='rounded-2xl object-cover h-[18rem] w-[32rem]'
          />
          <p className='pt-8 w-[42rem]'>{selectedService?.description}</p>
        </div>
      </div>
    </div>
  )
}