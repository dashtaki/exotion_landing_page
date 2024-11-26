import React from 'react';
import { Button } from '@/components/ui/button'

const CookieBanner = () => {
  return (
    <div className="fixed bottom-0 w-full bg-[#101828] text-white p-4 flex justify-between items-center text-sm">
      <p>We Use Cookies to Enhance Your Experience and Protect Your Privacy!.</p>
      <Button variant="secondary" className="rounded-none" size="sm"> Accept Cookies </Button>
    </div>
  );
};

export default CookieBanner;
