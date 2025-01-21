import { forwardRef } from 'react'

export interface SectionProps {
  title: string
  description: string
}

const Section = forwardRef(({ title, description }: SectionProps, ref) => {
  return (
    <section ref={ref} className="py-48">
      <div className="grid-cols-1 w-1/2">
        <h2 className="text-4xl md:text-5xl mb-12">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </section>
  )
})

export default Section
