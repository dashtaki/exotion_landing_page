import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Section from '@/components/Section'
import { SECTIONS } from '@/contants'

const Content = () => {
  const sectionRefs = useRef<HTMLElement[]>([])
  const [currentImage, setCurrentImage] = useState('PHONE_1.svg')

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((section: HTMLElement, index: number) => {
        if (!section) {
          return
        }

        const rect = section.getBoundingClientRect()
        if (rect.top >= 0 && (rect.top + 150) <= window.innerHeight / 2) {
          setCurrentImage(`PHONE_${index}.svg`)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="px-8 md:pl-12 lg:pl-20">
      <div className="sticky -top-4 h-0">
        <Image
          src={currentImage}
          alt={'props.title'}
          width={250}
          height={300}
          className="mr-9 mt-20 rounded-lg transition duration-500 ease-in-out absolute sm:right-0 md:right-0 md:mr-0 xl:right-32"
        />
      </div>

      {SECTIONS.map((item, i) => (
        <Section
          key={i}
          title={item.title}
          description={item.description}
          sectionRef={(el) => {
            sectionRefs.current[i] = el as HTMLDivElement
          }}
        />
      ))}
    </section>
  )
}

export default Content
