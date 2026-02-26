'use client'

import Hero from './components/Hero'
import Footer from './components/Footer'
import TrustedClients from './components/TrustedClient'

import { TestimonialsSection } from './components/TestimonialSection'
import { LandingUiCard } from './components/LandingUiCard'
import { FeaturesSection } from './components/FeatureSection'
import SemiCircleCards from './components/LandingPagesemicircularcards/SemicircleCards'
import FaqSection from './components/FaqSection'
export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* <Header /> */}
      <Hero />
      <LandingUiCard/>
      <TrustedClients/>
<FeaturesSection/>
<SemiCircleCards/>
{/* <LandingPageWidget/> */}
      {/* payment ui make  */}
<TestimonialsSection/>
<FaqSection/>
      <Footer />
    </div>
  )
}

