import React from 'react'
import Navbar from '../components/navbar'
import { PageProps } from 'gatsby'
import banner from "../images/learning-center-banner.jpg"
import learningCenters from "../data/learning-centers.json"
import services from "../data/services.json"
import { v4 } from 'uuid'

export default function Blog({ location }: PageProps) {
  const learningCenter = learningCenters.find((learningCenter) => {
    return `#${learningCenter.slug}` === location.hash
  })
  
  return (
    <main>
      <Navbar pathname={location.pathname} />
      <Banner {...learningCenter!} />
      <Categories />
    </main>
  )
}

interface BannerProps {
  name: string
  description: string
}
function Banner({ name, description }: BannerProps) {
  return (
    <>
      <div className='bg-primary-lightest w-full h-72 flex justify-end items-end'>
        <img
          src={banner} alt="Services"
          className='rounded-3xl w-[42rem] h-[24rem] absolute m-8 object-cover top-24 left-0'
        />
        <div className='w-1/2'>
          <h1 className='text-primary text-6xl font-semibold pb-12'>
            {name}
          </h1>
        </div>
      </div>
      <div className='flex justify-end h-64'>
        <div className='w-1/2 p-6 pl-0'>
          <p className='w-[32rem]'>{description}</p>
        </div>
      </div>
    </>
  )
}

function Categories() {
  // IDEA: sort by
  return (
    <div className='pt-24'>
      <Category title='Popular' />
      <Category title='Latest' />
      <Category title='Recent' />
    </div>
  )
}

interface CategoryProps {
  title: string
}
function Category({ title }: CategoryProps) {
  // TODO: from db
  
  return (
    <div className='flex w-full'>
      <h1 className='
        size-48 p-4 box-content flex justify-center items-center text-center text-neutral-500
      '>
        {title}
      </h1>
      <div className='flex py-2 gap-2 items-center'>
        {services.individuals.map((service) => {
          const key = v4()
          return (
            <div key={key} className='h-32 w-60 rounded-xl overflow-hidden'>
              <img src={service.image} alt={service.name} className='h-full w-full object-cover' />
            </div>
          )
        })}
      </div>
    </div>
  )
}