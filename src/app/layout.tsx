import "./globals.css";
import { Urbanist } from "next/font/google"
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

//👇 Configure font object
const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Experience In Motion",
  description: "Challenge me with your dreams",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(urbanist.className, "antialiased")}>{children}</body>
    </html>
  )
}


/* TODO List:
- // Later: Ask Saeed for proper screenshots
- Change Logo To Exotion
- Implement subscription
- Implement Cookies
- Add GoogleAnalytics
- Add copyright to footer
   - inspiration  https://marketifythemes.net/html/grax/intro.html?storefront=envato-elements
   -              https://mauve-oval-34zc.squarespace.com/config/
- Add social medias to the footer
* */
