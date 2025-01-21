'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Input } from '@/components/ui/input'

const Banner = () => {
  const joinWaitList = () => {
    return null
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
            <Input placeholder="Enter your email" className="col-start-1 col-end-4 md:col-start-1 md:col-end-4" />
            <Button
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

      <div className="grid grid-cols-1 md:grid-cols-2 w-full my-32 gap-12">
        <h2 className="text-3xl md:text-5xl lg:text-4xl my-auto">
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
