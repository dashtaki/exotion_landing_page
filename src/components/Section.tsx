import React, { Ref } from 'react'
import Image from 'next/image'

export interface SectionDetail {
  index?: number
  title: string
  description: string
  sectionRef?: Ref<HTMLDivElement>
}

const Section = ({ index, title, description, sectionRef }: SectionDetail) => {
  return (
    <section ref={sectionRef} className='py-8 md:py-48'>
      <div className='w-full grid-cols-1 md:w-1/2'>
        <h2 className='mb-8 text-4xl sm:mb-12 md:text-5xl'>{title}</h2>
        <p className='text-lg'>{description}</p>
      </div>

      <Image
        src={`PHONE_${index}.svg`}
        alt={'props.title'}
        width={250}
        height={300}
        className='mx-auto mt-8 block sm:hidden'
      />
    </section>
  )
}

export default Section
