'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import TrustedClients from './components/TrustedClient'
import Features from './components/Features'
import { TestimonialsSection } from './components/TestimonialSection'
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
      <TrustedClients/>
      {/* payment ui make  */}
<Features/>
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