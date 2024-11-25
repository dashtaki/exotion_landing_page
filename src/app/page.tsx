import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#4230d7]">
      {/* Hero Section */}
      <nav className="absolute top-0 w-full z-10 p-4 flex justify-between items-center">
        <Image
          src="/logo.svg"
          alt="Experience In Motion"
          className="object-cover"
          width={100}
          height={50}
        />

        {/*<h1 className="text-white text-xl font-light">Exotion</h1>*/} {/*<Button variant="ghost" className="text-white hover:text-white/80 text-lg">*/} {/*  Login*/} {/*</Button>*/}
      </nav>

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

      {/* Fine Drinks Section */}
      <section className="py-20 px-4 md:px-20 bg-[#4230d7] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center justify-between">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-light">Fine Drinks</h2>
            <p className="text-lg text-white/80">
              We'll be mixing tiki classics and some new creations using top-shelf spirits and organic mixers. Not a
              tipper? Not to worry—we'll have a full menu of delicious mocktails on offer, too.
            </p>
          </div>

          <div className="flex">
              <Image
                src="/home.png"
                alt="Elegant cocktails on table"
                width={250}
                height={300}
                className="rounded-lg mr-9"
              />

              <Image
                src="/challengePreview.png"
                alt="Elegant cocktails on table"
                width={250}
                height={300}
                className="rounded-lg"
              />
          </div>
        </div>
      </section>

      {/* Good Vibes Section */}
      <section className="py-20 px-4 md:px-20 bg-[#6149c6] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-6 md:order-2">
            <h2 className="text-4xl md:text-6xl font-light">Good Vibes</h2>
            <p className="text-lg text-white/80">
              Look out for guest DJs spinning vintage bossa nova and deep house, party games, a tiki photo booth and a
              top secret live performance right as the clock strikes midnight. Don't miss the fun!
            </p>
          </div>

          <div className="flex">
            <Image
              src="/GeneralProfile.png"
              alt="Elegant cocktails on table"
              width={250}
              height={300}
              className="rounded-lg mr-9"
            />

            <Image
              src="/AboutChallenge.png"
              alt="Elegant cocktails on table"
              width={250}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="py-20 px-4 md:px-20 bg-[#4230d7] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-light">Fine Drinks</h2>
            <p className="text-lg text-white/80">
              We'll be mixing tiki classics and some new creations using top-shelf spirits and organic mixers. Not a
              tipper? Not to worry—we'll have a full menu of delicious mocktails on offer, too.
            </p>
          </div>

          <div className="flex">
            <Image
              src="/home.png"
              alt="Elegant cocktails on table"
              width={250}
              height={300}
              className="rounded-lg mr-9"
            />

            <Image
              src="/challengePreview.png"
              alt="Elegant cocktails on table"
              width={250}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* RSVP Section */}
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

      {/* Location Section */}
      <footer className="py-20 px-4 bg-[#4230d7] text-white text-center">
        <div className="max-w-6xl mx-auto space-y-6">
          <h3 className="text-sm uppercase tracking-wider">Location</h3>
          <p className="text-4xl md:text-6xl font-light">Germany</p>
          <p className="text-4xl md:text-6xl font-light">Cologne</p>
        </div>
      </footer>

      {/* Subscription Banner */}
      <div className="fixed bottom-0 w-full bg-[#101828] text-white p-4 flex justify-between items-center text-sm">
        <p>We Use Cookies to Enhance Your Experience and Protect Your Privacy!.</p>
        <Button variant="secondary" className="rounded-none" size="sm">
          Accept Cookies
        </Button>
      </div>
    </main>
  )
}
