'use client'
import { COOKIE_NAME } from '@/contants'
import CookieConsent from 'react-cookie-consent'

const CookieConsentDialog = () => {
  return (
    <div>
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
    </div>
  )
}

export default CookieConsentDialog
