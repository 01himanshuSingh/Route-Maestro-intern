
import Hero from './components/Hero'
import TrustedClients from './components/TrustedClient'

import { TestimonialsSection } from './components/TestimonialSection'
import { LandingUiCard } from './components/LandingUiCard'
import { FeaturesSection } from './components/FeatureSection'
import SemiCircleCards from './components/LandingPagesemicircularcards/SemicircleCards'
import FaqSection from './components/FaqSection'
import { Metadata } from 'next'
import LandinpageBusinesspage from './components/LandinpageBusinesspage'



export const getRobots = () => {
  const isProduction = process.env.NEXT_PUBLIC_ENV === "production";

  return isProduction
    ? { index: true, follow: true }
    : { index: false, follow: false };
};

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* <Header /> */}
     
      <Hero />
      <LandinpageBusinesspage/>
      <LandingUiCard/>
      <TrustedClients/>
<FeaturesSection/>
<SemiCircleCards/>
{/* <LandingPageWidget/> */}
      {/* payment ui make  */}
<TestimonialsSection/>
<FaqSection/>
      
    </div>
  )
}

