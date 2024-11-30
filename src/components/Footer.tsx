const Footer = () => {
  return (
    <footer className='bg-[#4230d7] px-4 py-20 text-white'>
      <div className='flex justify-around text-center'>
        <div className='mx-auto max-w-6xl space-y-6'>
          <h3 className='text-sm uppercase tracking-wider'>Location</h3>
          <p className='text-4xl font-light md:text-6xl'>Germany, Cologne</p>
          {/*<p className="text-4xl md:text-6xl font-light">Cologne</p>*/}
        </div>

        <div className='mx-auto max-w-6xl space-y-6'>
          <h3 className='text-sm uppercase tracking-wider'>Contact</h3>
          <p className='text-4xl font-light md:text-6xl'>info@exotion.com</p>
        </div>
      </div>

      <div className='mt-12 text-center'>
        © Copyright {new Date().getFullYear()} - by Exotion
      </div>
    </footer>
  )
}

export default Footer
