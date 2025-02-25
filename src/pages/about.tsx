import React from 'react'
import Navbar from '../components/navbar'
import { HeadFC, PageProps } from 'gatsby'
import banner from "../images/home-about.jpg"
import useSiteMetadata from '../hooks/useSiteMetadata'

export const Head: HeadFC = () => {
  const { title } = useSiteMetadata()
  return <title>{title} | About</title>
}
export default function About({ location }: PageProps) {
  return (
    <main>
      <Navbar pathname={location.pathname} />
      <Banner />
      <Vision />
      <Mission />
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
            About Us
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

function Vision() {
  return (
    <div className='py-24 px-24'>
      <h1 className='
        border-b-primary border-b-2 text-primary text-4xl font-semibold w-fit pb-4
      '>
        Our Vision
      </h1>
      <p className='pt-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam animi autem, ipsam amet, iusto, sit iste pariatur perferendis itaque quae quidem nisi ea. Deserunt fugit, iusto placeat obcaecati nulla tempora repudiandae, est et suscipit voluptatibus deleniti voluptate! Fuga aut corrupti quod consequuntur quasi officia, nobis itaque incidunt dolores repellat fugit at culpa. Laboriosam deleniti error ea ullam nostrum. Quas magni aut tenetur cupiditate soluta.
      </p>
    </div>
  )
}

function Mission() {
  return (
    <div className='py-24 px-24 flex flex-col items-end bg-primary-lightest'>
      <h1 className='
        border-b-primary border-b-2 text-primary text-4xl font-semibold w-fit pb-4
      '>
        Our Mission
      </h1>
      <p className='pt-8 text-right'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam animi autem, ipsam amet, iusto, sit iste pariatur perferendis itaque quae quidem nisi ea. Deserunt fugit, iusto placeat obcaecati nulla tempora repudiandae, est et suscipit voluptatibus deleniti voluptate! Fuga aut corrupti quod consequuntur quasi officia, nobis itaque incidunt dolores repellat fugit at culpa. Laboriosam deleniti error ea ullam nostrum. Quas magni aut tenetur cupiditate soluta.
      </p>
    </div>
  )
}