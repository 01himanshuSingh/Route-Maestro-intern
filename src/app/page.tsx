'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import TrustedClients from './components/TrustedClient'

import { TestimonialsSection } from './components/TestimonialSection'
import { LandingUiCard } from './components/LandingUiCard'
import { FeaturesSection } from './components/FeatureSection'
import LandingPageWidget from './components/LandingPageWidget'

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      <Hero />
      <LandingUiCard/>
      <TrustedClients/>
      <FeaturesSection/>
      <LandingPageWidget/>
      <TestimonialsSection/>
      <Footer />
    </div>
  )
}

