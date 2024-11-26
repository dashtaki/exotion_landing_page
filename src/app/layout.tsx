'use client'
import "./globals.css";
import { Urbanist } from "next/font/google"
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import CookieConsent from 'react-cookie-consent'
import { COOKIE_NAME } from '@/contants'

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(urbanist.className, "antialiased")}>{children}</body>

      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName={COOKIE_NAME}
        containerClasses="bg-[#101828] text-white text-sm"
        buttonStyle={{ backgroundColor: "white", color: "black" }}
        expires={150}
      >
        We Use Cookies to Enhance Your Experience and Protect Your Privacy!
      </CookieConsent>
    </html>
  )
}


/* TODO List:
- // Later: Ask Saeed for proper screenshots
- Change Logo To Exotion
- Implement subscription
- Add GoogleAnalytics
* */
