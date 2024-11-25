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
- Add proper app screenshots
- Add social medias to the footer
- Add contact to footer
- Add copyright to footer
   - inspiration  https://marketifythemes.net/html/grax/intro.html?storefront=envato-elements
   -              https://mauve-oval-34zc.squarespace.com/config/
- Separate components
- Implement Cookies
- Add GoogleAnalytics
- Implement subscription
- Change Logo To Exotion
- Change titles and description(take from BP)
-
* */
