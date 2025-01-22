'use client'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import CookieConsent from 'react-cookie-consent'
import { COOKIE_NAME } from '@/contants'
import { Toaster } from '@/components/ui/toaster'
import { GoogleTagManager } from '@next/third-parties/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn(poppins.className, 'antialiased')}>{children}</body>

      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS &&
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      }

      <CookieConsent
        location='bottom'
        buttonText='Accept'
        cookieName={COOKIE_NAME}
        containerClasses='bg-[#101828] text-white text-sm'
        buttonStyle={{ backgroundColor: 'white', color: 'black' }}
        expires={150}
      >
        We Use Cookies to Enhance Your Experience and Protect Your Privacy!
      </CookieConsent>
      <Toaster />
    </html>
  )
}

/* TODO List:
- Change Logo To Exotion
- husky
**/
