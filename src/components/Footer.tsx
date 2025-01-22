import { BRAND } from '@/contants'

const Footer = () => {
  return (
    <footer className='bg-brand-600 px-4 py-10 text-white'>
      <div className='grid grid-cols-1 gap-y-10 md:grid-cols-2'>
        <div className='mx-auto max-w-6xl space-y-4 text-center md:space-y-6'>
          <h3 className='text-sm uppercase tracking-wider'>Location</h3>
          <p className='text-3xl font-light'>Germany, Cologne</p>
        </div>

        <div className='mx-auto max-w-6xl space-y-4 text-center md:space-y-6'>
          <h3 className='text-sm uppercase tracking-wider'>Contact</h3>
          <p className='text-3xl font-light'>{`info@${BRAND}.com`}</p>
        </div>
      </div>

      <div className='mt-12 text-center'>
        © Copyright {new Date().getFullYear()} - by {BRAND}
      </div>
    </footer>
  )
}

export default Footer
