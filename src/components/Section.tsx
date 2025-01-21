import React, { Ref } from 'react'
import Image from 'next/image'

export interface SectionProps {
  index: number
  title: string
  description: string
  sectionRef?: Ref<HTMLDivElement>;
}

const Section = ({ index, title, description, sectionRef }: SectionProps) => {
  return (
    <section ref={sectionRef} className="py-8 md:py-48">
      <div className="grid-cols-1 w-full md:w-1/2">
        <h2 className="text-4xl md:text-5xl mb-8 sm:mb-12">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>

      <Image
        src={`PHONE_${index}.svg`}
        alt={'props.title'}
        width={250}
        height={300}
        className="block sm:hidden mx-auto mt-8"
      />
    </section>
  )
}

export default Section
