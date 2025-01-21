import { SectionDetail } from '@/components/Section'

export const BRAND = 'Exotion'
export const COOKIE_NAME = 'CookieConsent'
export const FORM_ID = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID
export const SUBSCRIBE_URL = `${process.env.NEXT_PUBLIC_CONVERTKIT_API_URL}/forms/${FORM_ID}/subscribe`

export const SECTIONS: SectionDetail[] = [
  {
    title: 'Create a challenge',
    description:
      'Create a challenge centered around an experience you’d love to have and share it with others who might want to try it. For instance, sipping coffee while enjoying the stunning view of the Eiffel Tower. Let your ideas spark adventures for others!',
  },
  {
    title: 'Profit from Your Adventures',
    description:
      'Earn money by designing exciting challenges based on your experiences and sharing them with others. When challengers take on and complete your tasks, and their submissions are approved, you receive compensation. It’s a rewarding way to inspire others while profiting from your creativity!',
  },
  {
    title: 'Inspire with your experiences',
    description:
      'Connect with people who value and admire your creativity. Spark conversations, gather likes, and build a community that celebrates meaningful moments. Whether it’s street food adventures or unique challenges, your experiences have the power to engage and unite.\n',
  },
  {
    title: 'Step up and Be a challenger',
    description:
      'Step into the role of a challenger by taking on thrilling tasks, completing them, and showcasing your adventurous side. Not only will you enjoy unique experiences, but you’ll also have the chance to earn money as a reward for your achievements.',
  },
  {
    title: 'Share your experience',
    description:
      'Take on exciting challenges and turn your creativity into cash! make money based on the impressions and view count your submissions generate and get rewarded for your impact!',
  },
]
