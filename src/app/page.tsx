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
    title: 'Profit from Your Adventures',
    description: 'Earn money by designing exciting challenges based on your experiences and sharing them with others. When challengers take on and complete your tasks, and their submissions are approved, you receive compensation. It’s a rewarding way to inspire others while profiting from your creativity!',
    images: ['/Dashboard.png', '/ChallengePreview.png'],
    rtl: true,
    index: 2
  },
  {
    title: 'Step up and Be a challenger',
    description: 'Step into the role of a challenger by taking on thrilling tasks, completing them, and showcasing your adventurous side. Not only will you enjoy unique experiences, but you’ll also have the chance to earn money as a reward for your achievements.',
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
