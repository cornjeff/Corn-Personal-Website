import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import ServicesGrid from '@/components/home/ServicesGrid'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import CtaBanner from '@/components/home/CtaBanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <WhyChooseUs />
      <CtaBanner />
    </>
  )
}
