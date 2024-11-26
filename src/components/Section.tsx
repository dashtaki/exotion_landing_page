import React from 'react';
import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface SectionProps {
  title: string
  description: string
  images: string[],
  rtl: boolean
  index: number
}

const Section = (props: SectionProps) => {
  const bgColor = props.index % 2 === 0 ? 'bg-[#4230d7]' : 'bg-[#6149c6]'

  return (
    <section className={cn('py-20 px-4 md:px-20 text-white', bgColor)}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center justify-between">
        {props.rtl &&
            <>
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-6xl font-light">{props.title}</h2>
                    <p className="text-lg text-white/80">
                      {props.description}
                    </p>
                </div>

                <div className="flex">
                    <Image
                        src={props.images[0]}
                        alt={props.title}
                        width={250}
                        height={300}
                        className="rounded-lg mr-9"
                    />

                    <Image
                        src={props.images[1]}
                        alt={props.title}
                        width={250}
                        height={300}
                        className="rounded-lg"
                    />
                </div>
            </>
        }

        {!props.rtl &&
            <>
                <div className="flex">
                    <Image
                        src={props.images[0]}
                        alt={props.title}
                        width={250}
                        height={300}
                        className="rounded-lg mr-9"
                    />

                    <Image
                        src={props.images[1]}
                        alt={props.title}
                        width={250}
                        height={300}
                        className="rounded-lg"
                    />
                </div>

                <div className="space-y-6">
                    <h2 className="text-4xl md:text-6xl font-light">{props.title}</h2>
                    <p className="text-lg text-white/80">
                      {props.description}
                    </p>
                </div>

            </>
        }
      </div>
    </section>
  );
};

export default Section;
