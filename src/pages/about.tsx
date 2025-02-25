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
          src={banner}
          alt="Services"
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
          <p className='w-[32rem]'>
            Welcome to Holo Wellness, a platform dedicated to empowering individuals 
            through AI-enhanced fitness tracking and musculoskeletal health management. 
            Our on-device technology provides real-time posture detection, exercise 
            classification, and personalized insights—ensuring you have the tools to 
            stay active, recover effectively, and meet your wellness goals.
          </p>
        </div>
      </div>
    </>
  )
}

function Vision() {
  return (
    <div className='py-24 px-24'>
      <h1
        className='
          border-b-primary border-b-2 text-primary text-4xl font-semibold w-fit pb-4
        '
      >
        Our Vision
      </h1>
      <p className='pt-8'>
        At Holo Wellness, we envision a future where cutting-edge AI seamlessly integrates 
        with everyday fitness and healthcare. By harnessing real-time movement classification, 
        deep posture analysis, and smart recommendations, we aim to create an inclusive 
        environment where everyone can track progress, reduce injury risks, and foster 
        healthier lifestyles—regardless of age, fitness level, or physical limitations.
      </p>
    </div>
  )
}

function Mission() {
  return (
    <div className='py-24 px-24 flex flex-col items-end bg-primary-lightest'>
      <h1
        className='
          border-b-primary border-b-2 text-primary text-4xl font-semibold w-fit pb-4
        '
      >
        Our Mission
      </h1>
      <p className='pt-8 text-right'>
        Our mission is to unite advanced AI technology with evidence-based exercise science 
        to guide people toward better mobility and pain-free living. Whether you’re recovering 
        from injury, managing a chronic condition, or simply striving for peak performance, 
        Holo Wellness offers personalized insights and step-by-step support. We believe 
        that accessible, intelligent tools can revolutionize the way individuals take charge 
        of their health—and we’re here to make that vision a reality.
      </p>
    </div>
  )
}
