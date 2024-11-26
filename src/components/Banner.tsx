import React from 'react';
import { Button } from '@/components/ui/button'

const Banner = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/*<Image*/} {/*  src="/banner.jpg"*/} {/*  alt="Experience In Motion"*/} {/*  fill*/} {/*  className="object-cover"*/} {/*  priority*/} {/*/>*/}

        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          style={{transform: 'scale(1.5)'}}
        >
          <source src="/exploring.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-1 text-center text-white space-y-6 p-4">
        <h2 className="text-5xl md:text-7xl font-light">Experience In Motion</h2>
        <Button variant="secondary" className="rounded-none w-36" size="lg"> RSVP </Button>
      </div>
    </section>
  );
};

export default Banner;
