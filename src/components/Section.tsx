import Image from 'next/image'

export interface SectionProps {
  title: string
  description: string
  images: string[]
}

const Section = (props: SectionProps) => {
  return (
    <section className="px-4 py-20 md:px-20">
      <div className="mx-auto grid max-w-6xl items-center justify-between gap-24 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl">{props.title}</h2>
          <p className="text-lg">{props.description}</p>
        </div>

        <div className="flex">
          <Image
            src={props.images[0]}
            alt={props.title}
            width={250}
            height={300}
            className="mr-9 rounded-lg"
          />

          <Image
            src={props.images[1]}
            alt={props.title}
            width={250}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Section
