'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import TrustedClients from './components/TrustedClient'

import { TestimonialsSection } from './components/TestimonialSection'
import { LandingUiCard } from './components/LandingUiCard'
import { FeaturesSection } from './components/FeatureSection'
import SemiCircleCards from './components/LandingPagesemicircularcards/SemicircleCards'
export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      <Hero />
      <LandingUiCard/>
      <TrustedClients/>
<FeaturesSection/>
<SemiCircleCards/>
{/* <LandingPageWidget/> */}
      {/* payment ui make  */}
<TestimonialsSection/>
      <Footer />
    </div>
  )
}


// import React from 'react'

// function page() {
//   return (
//     <div>page</div>
//   )
// }

// export default page