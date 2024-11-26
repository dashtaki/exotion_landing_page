import Section, { SectionProps } from '@/components/Section'
import Menu from "@/components/Menu";
import Banner from '@/components/Banner'
import SubscribeEmail from '@/components/SubscribeEmail'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

const SECTIONS: SectionProps[] = [
  {
    title: 'Ask for a challenge',
    description: 'Post unique challenges for others to complete, like experiencing a café in Paris.',
    images: ['/Home.png', '/GeneralProfile.png'],
    rtl: true,
    index: 0
  },
  {
    title: 'Share your experience',
    description: 'Complete challenges and share your journey through video submissions.',
    images: ['/AboutChallenge.png', '/ChallengePreview.png'],
    rtl: false,
    index: 1
  },
  {
    title: 'Be a challenger',
    description: 'Take on exciting tasks, complete them, and showcase your adventurous spirit.',
    images: ['/Home.png', '/GeneralProfile.png'],
    rtl: true,
    index: 2
  },
  {
    title: 'Make money',
    description: 'Earn compensation for completing and sharing approved challenges.',
    images: ['/AboutChallenge.png', '/ChallengePreview.png'],
    rtl: false,
    index: 3
  }
];

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
