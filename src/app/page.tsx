'use client'

import Section, { SectionProps } from '@/components/Section'
import Banner from '@/components/Banner'
import { useRef } from 'react'

const SECTIONS: SectionProps[] = [
  {
    title: 'Create a challenge',
    description:
      'Create a challenge centered around an experience you’d love to have and share it with others who might want to try it. For instance, sipping coffee while enjoying the stunning view of the Eiffel Tower. Let your ideas spark adventures for others!',
    images: ['/CreateChallenge.png', '/ChallengeList.png'],
  },
  {
    title: 'Share your experience',
    description:
      'Share your experiences with a wider audience and let your experience inspire and resonate with others. Sharing allows you to connect with people who value and admire it. Watch as your experiences spark conversations, gather likes, and create a ripple of engagement that brings people together.',
    images: ['/ChallengePreview.png', '/AboutChallenge.png'],
  },
  {
    title: 'Profit from Your Adventures',
    description:
      'Earn money by designing exciting challenges based on your experiences and sharing them with others. When challengers take on and complete your tasks, and their submissions are approved, you receive compensation. It’s a rewarding way to inspire others while profiting from your creativity!',
    images: ['/Dashboard.png', '/ChallengePreview.png'],
  },
  {
    title: 'Step up and Be a challenger',
    description:
      'Step into the role of a challenger by taking on thrilling tasks, completing them, and showcasing your adventurous side. Not only will you enjoy unique experiences, but you’ll also have the chance to earn money as a reward for your achievements.',
    images: ['/ChallengeDetail.png', '/ChallengeCompleted.png'],
  }
]

export default function Home() {
  const subscribeEmailRef = useRef(null)

  const onScrollToSubscribeRef = () =>
    subscribeEmailRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

  return (
    <main className='min-h-screen'>
      <Banner onButtonClick={onScrollToSubscribeRef} />

      {/*{SECTIONS.map((item, i) => (*/}
      {/*  <Section key={i} {...item} />*/}
      {/*))}*/}

      {/*<div ref={subscribeEmailRef}>*/}
      {/*  <SubscribeEmail />*/}
      {/*</div>*/}
      {/*<Footer />*/}
    </main>
  )
}
