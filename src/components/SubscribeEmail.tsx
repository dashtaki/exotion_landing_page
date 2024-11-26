import React from 'react';

const SubscribeEmail = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#101828]">
      <div className="relative z-1 text-center text-white space-y-6 p-4 max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-light">RSVP</h2>
        <p className="text-lg">
          Stay in the Loop: Subscribe Now to Get Updates and Be the First to Know When Our App is Ready!
        </p>

        <div className="flex items-center mt-1">
          <input type="email" id="input-9"
                 className="w-full h-10 px-3 text-sm text-gray-700 focus:outline-none shadow-sm"
                 placeholder="Subscribe to stay tune..." />
          <button
            className="h-10 px-4 text-sm bg-[#4230d7] border border-l-0 border-[#4230d7] shadow-sm text-blue-50 hover:text-white hover:bg-blue-400 hover:border-blue-400 focus:outline-none">Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeEmail;
