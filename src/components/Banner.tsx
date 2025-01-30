'use client'

import React, { FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { isValidEmail } from '@/lib/utils'
import { BRAND, SUBSCRIBE_URL } from '@/contants'
import { toast } from '@/hooks/use-toast'

const Banner = () => {
  const [isInvalidEmail, setIsInvalidEmail] = useState<boolean>(true)
  const [email, setEmail] = useState('')

  const onChangeEmail = (email: string) => {
    setEmail(email)

    setIsInvalidEmail(!isValidEmail(email))
  }

  const joinWaitList = async (event: FormEvent) => {
    event.preventDefault()

    if (!isValidEmail(email)) {
      setIsInvalidEmail(true)
    }

    const payload = JSON.stringify({
      email,
      tags: ['landing_page'],
      api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
    })

    try {
      const response = await fetch(SUBSCRIBE_URL, {
        method: 'POST',
        body: payload,
        headers: {
          Accept: 'application/json; charset=utf-8',
          'Content-Type': 'application/json',
        },
      })

      const json = await response.json()

      if (json?.subscription?.id) {
        setEmail('')
        setIsInvalidEmail(true)

        toast({
          title: 'Joined',
          description: 'Please check your inbox to confirm the subscription!',
        })
        return
      }

      toast({
        title: 'Oops',
        description: 'Something went wrong... Please, try again!',
      })
      console.error('Failed to subscribe')
    } catch (err) {
      toast({
        title: 'Oops',
        description: 'Something went wrong... Please, try again!',
      })
      console.error(err)
    }
  }

  return (
    <div className='px-8 pt-12 md:pl-12 md:pt-0 lg:pl-20'>
      <section className='grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-20'>
        <div className='flex flex-col justify-center'>
          <Image
            src='/Logo.svg'
            alt='Experience In Motion'
            className='object-cover pb-12'
            width={200}
            height={100}
          />

          <h2 className='pb-6 text-6xl font-semibold leading-none md:text-6xl'>
            <span className='text-brand-600'>Ex</span>perience In M<span className='text-brand-600'>otion</span>
          </h2>

          <h3 className='text-lg font-light md:text-lg'>
            Take on exciting challenges and turn your creativity into cash! make
            money based on the impressions and view count your submissions
            generate and get rewarded for your impact!
          </h3>

          <div className='mt-10 grid grid-cols-2 gap-2'>
            <Input
              type='email'
              onChange={(e) => onChangeEmail(e.target.value)}
              value={email}
              placeholder='Enter your email'
              className='col-start-1 col-end-4 md:col-start-1 md:col-end-4'
            />

            <Button
              disabled={isInvalidEmail}
              onClick={joinWaitList}
              className='col-start-1 col-end-4 md:col-start-4'
            >
              Join Waiting List
            </Button>
          </div>
        </div>

        <div className='flex'>
          <Image
            src='/BannerScreenshot.svg'
            alt='Experience In Motion'
            width={540}
            height={600}
          />
        </div>
      </section>

      <div className='my-20 grid w-full grid-cols-1 gap-12 sm:my-32 md:grid-cols-2'>
        <h2 className='my-auto text-center text-3xl md:text-start md:text-5xl lg:text-4xl'>
          Create and Complete <span className='font-bold'>Challenges</span>{' '}
          Anywhere!
        </h2>

        <p className='text-center text-lg md:text-start'>
          {BRAND} connects you with a world of unique experiences. Create
          challenges, set rewards, and let others capture the moments for you.
          Or, take on exciting challenges and earn rewards by sharing your
          adventures!
        </p>
      </div>
    </div>
  )
}

export default Banner
