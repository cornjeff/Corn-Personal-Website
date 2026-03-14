import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import ServicesGrid from '@/components/home/ServicesGrid'
import FeaturedProject from '@/components/home/FeaturedProject'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import PhotoGallery from '@/components/home/PhotoGallery'
import CtaBanner from '@/components/home/CtaBanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <FeaturedProject />
      <WhyChooseUs />
      <PhotoGallery />
      <CtaBanner />
    </>
  )
}
