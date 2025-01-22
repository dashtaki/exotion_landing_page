import Banner from '@/components/Banner'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className='min-h-screen'>
      <div className='m-auto max-w-screen-2xl'>
        <Banner />
        <Content />
      </div>

      <Footer />
    </main>
  )
}
