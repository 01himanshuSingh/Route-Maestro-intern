'use client'

import { Plus, BarChart3 } from 'lucide-react'
import { HeroFeature2 } from './HeroFeature2'
import { HeroFeature } from './HeroFeature'

import { motion } from "framer-motion"
export function LandingUiCard() {
const sentence =
  "Next Gen Travel Technology Solution"

const words = sentence.split(" ")


  return (
    <div className="min-h-screen  px-4 py-8 sm:px-6 lg:px-8">
      {/* Header section */}
   <div className="max-w-7xl mx-auto mb-12 text-center">
    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
      
      {/* WORD BY WORD ANIMATION */}
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08 }}
        className="inline-block"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>

      <br />

      {/* SECOND LINE */}
      <motion.span
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-[#e2472b] inline-block"
      >
        For Travel Business
      </motion.span>

    </h1>
 
  <p className="text-slate-400 text-[16px] max-w-2xl mx-auto">
    A powerful platform to manage bookings, billing, and operations with modern tools built for travel agencies.
  </p>
</div>


      {/* Two-column grid layout */}
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 auto-rows-auto">
   <HeroFeature
        icon={<Plus className="w-6 h-6" />}
        title="Generating Door-To-Door Travel Routes"
        description="RouteMaestro generates all possible multi-modal travel routes, seamlessly combining air travel routes with various local transit routes across trains, buses, taxis, & other transit choices within each city."
        imageSrc="/generating-door-door-routes.webp"
      />
   
      <HeroFeature2
        title="AI Powered Dynamic Packaging"
        
          description= 'RouteMaestro utilizes AI-ML to craft personalized travel experiences, enabling users to effortlessly plan, manage, and book their trips anytime and from anywhere.'
        
        chartImage="/AI Powered Dynamic Packaging & Itinerary Management.webp"
     
      />
      <HeroFeature2
        title="Secure & Easy Payment Options"
        
          description= 'RouteMaestro has seamlessly partnered with multiple payment gateways, offering its clients the flexibility to choose from their preferred payment gateway.'
        
        chartImage="/Secure & Easy Payment Options.webp"
     
      />
      <HeroFeature
        icon={<Plus className="w-6 h-6" />}
        title="Comprehensive Diverse Global Travel Inventory"
        description="Choose from multiple global travel inventories, across flights, hotels, sightseeing, activities, transfers and start generating personalised trips, instantly."
        imageSrc="/Comprehensive Diverse Global Travel Inventory.webp"
      />
 

  </div>
</div>



      {/* Additional info section */}
     
    </div>
  )
}
