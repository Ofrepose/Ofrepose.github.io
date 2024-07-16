export const metadata = {
  title: 'Daniel Payne - Fullstack Software Developer',
  description: 'Software Engineer specializing in React and JavaScript. Explore a range of innovative projects highlighting expertise in front-end development, React components, and JavaScript frameworks.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </>
  )
}
