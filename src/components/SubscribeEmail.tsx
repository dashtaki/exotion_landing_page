'use client'

import { FormEvent, useState } from 'react'
import { cn, isValidEmail } from '@/lib/utils'

const SubscribeEmail = () => {
  const [status, setStatus] = useState<'SUCCESS' | 'ERROR' | null>(null)
  const [isInvalidEmail, setIsInvalidEmail] = useState<boolean>(true)
  const [email, setEmail] = useState('')

  const onChangeEmail = (email: string) => {
    setEmail(email)

    setIsInvalidEmail(!isValidEmail(email))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (!isValidEmail(email)) {
      setIsInvalidEmail(true)
    }

    const FORM_ID = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID
    const SUBSCRIBE_URL = `${process.env.NEXT_PUBLIC_CONVERTKIT_API_URL}/forms/${FORM_ID}/subscribe`

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
        setStatus('SUCCESS')
        setEmail('')
        setIsInvalidEmail(true)
        setTimeout(() => setStatus(null), 3000)
        return
      }

      setStatus('ERROR')
      console.error('Failed to subscribe')
    } catch (err) {
      setStatus('ERROR')
      console.error(err)
    }
  }

  return (
    <section className='relative flex h-screen items-center justify-center bg-[#101828]'>
      <div className='z-1 relative mx-auto max-w-2xl space-y-6 p-4 text-center text-white'>
        <h2 className='text-5xl font-light md:text-7xl'>RSVP</h2>
        <p className='text-lg'>
          Stay in the Loop: Subscribe Now to Get Updates and Be the First to
          Know When Our App is Ready!
        </p>

        <div className='mt-1 flex items-center'>
          <input
            type='email'
            id='input-9'
            onChange={(e) => onChangeEmail(e.target.value)}
            value={email}
            className='text-md h-12 w-full px-3 text-gray-700 shadow-sm focus:outline-none'
            placeholder='Subscribe to stay tune...'
          />

          <button
            disabled={isInvalidEmail}
            onClick={handleSubmit}
            className={cn(
              'text-md h-12 border border-l-0 border-[#4230d7] bg-[#4230d7] px-4 text-blue-50 shadow-sm hover:border-blue-400 hover:bg-blue-400 hover:text-white focus:outline-none',
              isInvalidEmail ? 'border-blue-400 bg-blue-400' : ''
            )}
          >
            Subscribe
          </button>
        </div>

        {status === 'SUCCESS' && (
          <p className='text-md'>
            Please check your inbox to confirm the subscription!
          </p>
        )}

        {status === 'ERROR' && (
          <p className='text-md'>
            Oops, something went wrong... Please, try again!
          </p>
        )}
      </div>
    </section>
  )
}

export default SubscribeEmail
