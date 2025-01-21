import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Section from '@/components/Section'
import { SECTIONS } from '@/contants'

const Content = () => {
  const sectionRefs = useRef([]) // Array of refs for each section
  const [currentImage, setCurrentImage] = useState('PHONE_1.svg') // State for current image

  useEffect(() => {
    const handleScroll = () => {
      // Check each section's position
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect()
          // Check if the section is in view
          if (rect.top >= 0 && (rect.top + 150) <= window.innerHeight / 2) {
            console.log(rect.top , window.innerHeight / 2)
            setCurrentImage(`PHONE_${index}.svg`) // Change the image
          }
        }
      })
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="px-8 md:pl-12 lg:pl-20 ">
      <div className="sticky top-32 h-0">
        <Image
          src={currentImage}
          alt={'props.title'}
          width={250}
          height={300}
          className="mr-9 mt-20 rounded-lg transition duration-500 ease-in-out absolute right-32"
        />
      </div>

      {SECTIONS.map((item, i) => (
        <Section
          key={i}
          title={item.title}
          description={item.description}
          ref={(el) => (sectionRefs.current[i] = el)} // Assign ref to each section
        />
      ))}
    </section>
  )
}

export default Content
