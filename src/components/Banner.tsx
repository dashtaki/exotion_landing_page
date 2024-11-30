import React from 'react'
import { Button } from '@/components/ui/button'

const Banner = (props: { onButtonClick: () => void }) => {
  return (
    <section className='relative flex h-screen items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 z-0 bg-[#194185]'>
        {/*<Image*/} {/*  src="/banner.jpg"*/}{' '}
        {/*  alt="Experience In Motion"*/} {/*  fill*/}{' '}
        {/*  className="object-cover"*/} {/*  priority*/} {/*/>*/}
      </div>

      <div className='z-1 relative space-y-6 p-4 text-center text-white'>
        <h2 className='text-5xl font-light md:text-7xl'>
          Experience In Motion
        </h2>
        <h2 className='text-lg font-light md:text-lg'>
          Experience a coffee on Mars!
        </h2>
        <Button
          variant='secondary'
          className='w-36 rounded-none'
          size='lg'
          onClick={props.onButtonClick}
        >
          {' '}
          RSVP{' '}
        </Button>
      </div>
    </section>
  )
}

export default Banner
