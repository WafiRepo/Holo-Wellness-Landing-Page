import React, { ReactNode, useState } from 'react'
import Navbar from '../components/navbar'
import { HeadFC, Link, PageProps } from 'gatsby'
import bannerImg from "../images/banner.png"
import useSiteMetadata from '../hooks/useSiteMetadata'
import FlatButton from '../components/flat_button'
import { IoMdArrowDroprightCircle } from "react-icons/io"
import aboutImg from "../images/home-about.jpg"
import servicesRaw from "../data/services.json"
import approachBg from "../images/home-approach-bg.webp"
import approches from "../data/approaches.json"
import { IoMdArrowDropright } from "react-icons/io";
import bannerBorder from "../images/home-banner-border.png"
import { v4 } from 'uuid'

export const Head: HeadFC = () => {
  const { title } = useSiteMetadata()
  return (
    <title>{title}</title>
  )
}

export default function HomePage({ location }: PageProps) {
  return (
    <main>
      <Navbar pathname={location.hash} />
      <Banner />
      <About />
      <Services />
      <Approach />
      <LearningCenter />
      {/* TODO: collaborations */}
    </main>
  )
}

interface SectionHeadingProps {
  children?: ReactNode
}
function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <p className='pb-2 border-b-2 border-b-neutral-500 w-fit'>
      {children}
    </p>
  )
}

function Banner() {
  return (
    <div className='
      bg-primary-lightest w-full h-[32rem] pt-24 box-content flex items-center overflow-x-hidden
    '>
      <div className='flex-[3] flex justify-center'>
        <div
          className='
            rounded-full bg-primary-lightest w-[27rem] h-[27rem] flex items-center justify-center
            flex-col *:text-center p-8 mb-8 bg-cover
            max-sm:w-[20rem] max-sm:h-[20rem]
          '
          style={{
            backgroundImage: `url(${bannerBorder})`,
          }}
        >
          <h1 className='text-3xl font-bold pb-8 max-sm:text-xl'>
            Kickstart Your AI-Enhanced <br /> Wellness Journey
          </h1>
          <p className='max-sm:text-sm'>
            Experience holistic musculoskeletal health with real-time posture 
            detection, exercise classification, and personalized recommendations. 
            Whether you're aiming to prevent injuries or boost performance, Hollo 
            Wellness has you covered.
          </p>
        </div>
      </div>
      <img
        src={bannerImg}
        alt="Body Fitness"
        className='h-[36rem] self-end flex-[2] object-contain max-sm:hidden'
      />
    </div>
  )
}

function About() {
  return (
    <div className='py-24 flex relative'>
      <img
        src={aboutImg}
        alt="Our Company"
        className='
          absolute left-12 -top-12 h-[28rem] rounded-2xl
          max-sm:h-[10rem]
        '
      />
      <div
        className='
          ml-auto w-1/3 box-content pr-48
          max-sm:pt-12 max-sm:w-full max-sm:px-6
        '
      >
        <SectionHeading>Our Company</SectionHeading>
        <p className='text-lg pt-10 pb-6'>
          At Holo Wellness, we are committed to empowering individuals, families, 
          and organizations through AI-driven posture analysis and evidence-based 
          exercise programs. Our mission is to make advanced movement classification 
          and personalized recommendations accessible to everyone—helping you stay 
          active, recover faster, and live pain-free.
        </p>
        <Link to='/about'>
          <FlatButton className='flex items-center'>
            More About Us
            <IoMdArrowDroprightCircle size="1.3rem" className='ml-3' />
          </FlatButton>
        </Link>
      </div>
    </div>
  )
}

function Services() {
  const displayCount = 3
  const services = servicesRaw.individuals.filter((_, index) => index < displayCount)
  
  const [selectedSlug, setSelectedSlug] = useState(services[0].slug)
  const selectedService = services.find((service) => service.slug === selectedSlug)

  const handleServiceHover: React.MouseEventHandler<HTMLLIElement> = (e) => {
    setSelectedSlug(e.currentTarget.id)
  }
  
  return (
    <div className='py-24 px-24'>
      <SectionHeading>Our Services</SectionHeading>

      <div className="flex items-center pb-12">
        <div className='w-1/2'>
          <ul className='pt-2 pr-12'>
            {services.map((service) => {
              const isSelected = service.slug === selectedSlug
              return (
                <li
                  key={service.slug}
                  className='border-b border-b-neutral-400/80'
                  id={service.slug}
                  onMouseEnter={handleServiceHover}
                >
                  <a
                    href={`/services#${service.slug}`}
                    className={`
                      flex py-8 px-8 items-center *:duration-300 duration-300 rounded-2xl
                      ${isSelected ? "translate-x-10" : ""}
                    `}
                  >
                    <div>
                      <h1 className='text-xl font-semibold text-neutral-600'>
                        {service.name}
                      </h1>
                      <p className='text-sm'>
                        {service.caption}
                      </p>
                    </div>
                    <IoMdArrowDroprightCircle className='ml-8 text-2xl text-primary' />
                  </a>
                </li>
              )
            })}
          </ul>
          <p className='pt-4 pl-6 underline underline-offset-8 text-primary'>
            + more!
          </p>
        </div>

        <img
          src={selectedService?.image}
          alt={selectedService?.name}
          className='w-1/2 object-contain hover:300 h-fit rounded-2xl'
        />
      </div>
      
      <Link to='/services'>
        <FlatButton className='flex items-center w-48 justify-between'>
          All Services
          <IoMdArrowDroprightCircle size="1.3rem" className='ml-3' />
        </FlatButton>
      </Link>
    </div>
  )
}

function Approach() {
  return (
    <div
      style={{
        backgroundImage: `url(${approachBg})`,
        backgroundPositionY: "center",
      }}
      className='bg-white/50 bg-blend-color py-32 px-24 bg-no-repeat bg-cover flex'
    >
      <ul className='w-1/2 pr-24'>
        {approches.map((approach) => {
          return (
            <li key={approach.slug}>
              <Link
                to={approach.slug}
                className='
                  rounded-2xl bg-neutral-600 text-white py-5 px-7 my-4 flex items-center
                  [&:hover_.read-more]:translate-x-6
                '
              >
                <div className='rounded-full size-3 bg-white'></div>
                <div className='pl-6'>
                  <h1 className='pb-3 text-xl font-semibold'>{approach.name}</h1>
                  <p>{approach.description}</p>
                  <p className='read-more duration-200 pt-4 flex items-center'>
                    Read More
                    <IoMdArrowDropright className='text-xl ml-2' />
                  </p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
      <div className='flex-1 flex flex-col justify-center'>
        <div className='bg-white w-96 p-2 rounded-r-2xl shadow-xl shadow-black/20'>
          <SectionHeading>Our Approach</SectionHeading>
        </div>
        <div className='bg-white p-4 mt-3 rounded-l-2xl shadow-xl shadow-black/20'>
          <p className='w-[24rem]'>
            We combine on-device AI, evidence-based movement science, 
            and user-friendly design to deliver real-time posture insights and 
            personalized exercise plans. Whether you're recovering from injury 
            or striving to optimize performance, our holistic approach 
            ensures you get the support you need every step of the way.
          </p>
        </div>
      </div>
    </div>
  )
}

function LearningCenter() {
  return (
    <div className='bg-white py-12 px-12'>
      <div className='pb-12'>
        <SectionHeading>Learning Center</SectionHeading>
      </div>
      
      <LearningSection title='Articles' />
      <LearningSection title='Case Studies' />
      <LearningSection title='Scientific Papers' />
      <LearningSection title='eBooks' />
      <LearningSection title='Testimonials' />
    </div>
  )
}

interface LearningSectionProps {
  title: string
}
function LearningSection({ title }: LearningSectionProps) {
  // Example content pulled from the same dataset.
  // In a real scenario, you'd likely fetch or filter data specifically for each learning category.
  return (
    <div className='flex w-full max-w-[100vh] overflow-x-auto'>
      <h1
        className='
          size-48 p-4 box-content flex justify-center items-center text-center text-neutral-500
        '
      >
        {title}
      </h1>
      <div className='flex py-2 gap-2 items-center'>
        {servicesRaw.individuals.map((service) => {
          const key = v4()
          return (
            <div key={key} className='h-32 w-60 rounded-xl overflow-hidden'>
              <img
                src={service.image}
                alt={service.name}
                className='h-full w-full object-cover'
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
