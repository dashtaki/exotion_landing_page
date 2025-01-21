'use client'

import React, { FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { isValidEmail } from '@/lib/utils'
import { SUBSCRIBE_URL } from '@/contants'
import { toast } from '@/hooks/use-toast'

enum SubscriptionStatus {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

const Banner = () => {
  const [status, setStatus] = useState<SubscriptionStatus | null>(null)
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
        setStatus(SubscriptionStatus.SUCCESS)
        setEmail('')
        setIsInvalidEmail(true)
        setTimeout(() => setStatus(null), 3000)

        toast({
          title: 'Joined',
          description: 'Please check your inbox to confirm the subscription!',
        })
        return
      }

      setStatus(SubscriptionStatus.ERROR)
      toast({
        title: 'Oops',
        description: 'Something went wrong... Please, try again!',
      })
      console.error('Failed to subscribe')
    } catch (err) {
      setStatus(SubscriptionStatus.ERROR)
      toast({
        title: 'Oops',
        description: 'Something went wrong... Please, try again!',
      })
      console.error(err)
    }
  }


  return (
    <div className="pt-12 md:pt-0 px-8 md:pl-12 lg:pl-20">
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-20">
        <div className="flex justify-center flex-col ">
          <Image
            src="/Logo.svg"
            alt="Experience In Motion"
            className="object-cover pb-12"
            width={100}
            height={50}
          />

          <h2 className="text-6xl md:text-6xl font-semibold pb-6 leading-none">
            Experience In <span className="text-brand-600">Motion</span>
          </h2>

          <h3 className="text-lg font-light md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </h3>

          <div className="grid grid-cols-2 gap-2 mt-10">
            <Input
              onChange={(e) => onChangeEmail(e.target.value)}
              value={email}
              placeholder="Enter your email"
              className="col-start-1 col-end-4 md:col-start-1 md:col-end-4" />

            <Button
              disabled={isInvalidEmail}
              onClick={joinWaitList} className="col-start-1 col-end-4 md:col-start-4">Join Wait List</Button>
          </div>
        </div>

        <div className="flex">
          <Image
            src="/BannerScreenshot.svg"
            alt="Experience In Motion"
            width={540}
            height={600}
          />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full my-20 sm:my-32 gap-12">
        <h2 className="text-3xl md:text-5xl lg:text-4xl my-auto text-center md:text-start">
          Create and Complete <span className="font-bold">Challenges</span> Anywhere!
        </h2>

        <p className="text-lg text-center md:text-start">Be My Guest connects you with a world of unique experiences.
          Create challenges, set rewards, and let others capture the moments for you. Or, take on exciting challenges
          and earn rewards by sharing your adventures!</p>
      </div>
    </div>
  )
}

export default Banner
