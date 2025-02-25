import React from 'react'
import Navbar from '../components/navbar'
import { HeadFC, navigate, PageProps } from 'gatsby'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { v4 } from 'uuid'
import approaches from "../data/approaches.json"

export const Head: HeadFC = () => {
  const { title } = useSiteMetadata()
  return <title>{title} | Detail Approach</title>
}
export default function DetailApproach({ location }: PageProps) {
  const hash = location.hash
  const approach = approaches.find((e) => `#${e.slug}` === hash)!

  if (!approach) navigate("/404")
   
  return (
    <main>
      <Navbar pathname={location.pathname} />
      <Banner {...approach} />
      <Contents contents={approach.contents} />
    </main>
  )
}

interface BannerProps {
  image: string
  name: string
  description: string
}
function Banner({ image, name, description }: BannerProps) {
  return (
    <>
      <div className='bg-primary-lightest w-full h-72 flex justify-end items-end'>
        <img
          src={image} alt={name}
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

interface ContentsProps {
  contents: {
    name: string
    image: string
    content: string
  }[]
}
function Contents({ contents }: ContentsProps) {
  return (
    <>
      {contents.map((content, index) => {
        const key = v4()
        const isOdd = index % 2 !== 0
        
        return (
          <div key={key} className={`
            py-24 px-24
            ${isOdd ? "flex flex-col items-end bg-primary-lightest" : ""}
          `}>
            <h1 className='
              border-b-primary border-b-2 text-primary text-4xl font-semibold w-fit pb-4
            '>
              {content.name}
            </h1>
            <div className={`
              pt-8 flex
              ${isOdd ? "flex-row-reverse" : ""}
            `}>
              <img
                src={content.image} alt={content.name}
                className='mx-12 h-72 w-[32rem] object-cover'
              />
              <p>{content.content}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}