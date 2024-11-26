import Section, { SectionProps } from '@/components/Section'
import Menu from "@/components/Menu";
import Banner from '@/components/Banner'
import SubscribeEmail from '@/components/SubscribeEmail'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

const SECTIONS: SectionProps[] = [
  {
    title: 'Create a challenge',
    description: 'Create a challenge centered around an experience you’d love to have and share it with others who might want to try it. For instance, sipping coffee while enjoying the stunning view of the Eiffel Tower. Let your ideas spark adventures for others!',
    images: ['/CreateChallenge.png', '/ChallengeList.png'],
    rtl: true,
    index: 0
  },
  {
    title: 'Share your experience',
    description: 'Share your experiences with a wider audience and let your experience inspire and resonate with others. Sharing allows you to connect with people who value and admire it. Watch as your experiences spark conversations, gather likes, and create a ripple of engagement that brings people together.',
    images: ['/ChallengePreview.png', '/AboutChallenge.png'],
    rtl: false,
    index: 1
  },
  {
    title: 'Make money',
    description: 'Earn compensation for completing and sharing approved challenges.',
    images: ['/Dashboard.png', '/ChallengePreview.png'],
    rtl: true,
    index: 2
  },
  {
    title: 'Be a challenger',
    description: 'Take on exciting tasks, complete them, and showcase your adventurous spirit.',
    images: ['/ChallengeDetail.png', '/ChallengeCompleted.png'],
    rtl: false,
    index: 3
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#4230d7]">
      <Menu/>
      <Banner/>
      {SECTIONS.map((item, i) => (<Section key={i} {...item} />))}
      <SubscribeEmail/>
      <Footer/>
      <CookieBanner/>
    </main>
  )
}
