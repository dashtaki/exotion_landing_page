import React from 'react';
import { Button } from '@/components/ui/button'

const Banner = (props: {onButtonClick: () => void}) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#194185]">
        {/*<Image*/} {/*  src="/banner.jpg"*/} {/*  alt="Experience In Motion"*/} {/*  fill*/} {/*  className="object-cover"*/} {/*  priority*/} {/*/>*/}
      </div>

      <div className="relative z-1 text-center text-white space-y-6 p-4">
        <h2 className="text-5xl md:text-7xl font-light">Experience In Motion</h2>
        <h2 className="text-lg md:text-lg font-light">Experience a coffee on Mars!</h2>
        <Button variant="secondary" className="rounded-none w-36" size="lg" onClick={props.onButtonClick}> RSVP </Button>
      </div>
    </section>
  );
};

export default Banner;
