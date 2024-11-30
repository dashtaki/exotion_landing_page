import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface SectionProps {
  title: string
  description: string
  images: string[]
  rtl: boolean
  index: number
}

const Section = (props: SectionProps) => {
  const bgColor = props.index % 2 === 0 ? 'bg-[#4230d7]' : 'bg-[#6149c6]'

  return (
    <section className={cn('px-4 py-20 text-white md:px-20', bgColor)}>
      <div className='mx-auto grid max-w-6xl items-center justify-between gap-24 md:grid-cols-2'>
        {props.rtl && (
          <>
            <div className='space-y-6'>
              <h2 className='text-4xl font-light md:text-6xl'>{props.title}</h2>
              <p className='text-lg text-white/80'>{props.description}</p>
            </div>

            <div className='flex'>
              <Image
                src={props.images[0]}
                alt={props.title}
                width={250}
                height={300}
                className='mr-9 rounded-lg'
              />

              <Image
                src={props.images[1]}
                alt={props.title}
                width={250}
                height={300}
                className='rounded-lg'
              />
            </div>
          </>
        )}

        {!props.rtl && (
          <>
            <div className='flex'>
              <Image
                src={props.images[0]}
                alt={props.title}
                width={250}
                height={300}
                className='mr-9 rounded-lg'
              />

              <Image
                src={props.images[1]}
                alt={props.title}
                width={250}
                height={300}
                className='rounded-lg'
              />
            </div>

            <div className='space-y-6'>
              <h2 className='text-4xl font-light md:text-6xl'>{props.title}</h2>
              <p className='text-lg text-white/80'>{props.description}</p>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Section
