import './globals.css'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

import { Toaster } from '@/components/ui/toaster'
import { GoogleTagManager } from '@next/third-parties/google'
import { Metadata } from 'next'
import CookieConsentDialog from '@/components/CookieConsent'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: "Exotion",
  description: "Take on exciting challenges and turn your creativity into cash!"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn(poppins.className, 'antialiased')}>{children}</body>

      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      )}

      <CookieConsentDialog />

      <Toaster />
    </html>
  )
}
