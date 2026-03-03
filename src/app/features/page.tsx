import Image from 'next/image'
import FeatureHero from './FeatureHero'
import FeaturesSection from './FeatureSection'
import FaqSection from '../components/FaqSection'

export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen bg-black">

      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

          {/* Left Side - Hero Text */}
          <div className="w-full lg:w-1/2">
            <FeatureHero />
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/ai-trip-plan.webp"
              alt="Travel booking dashboard"
              width={600}
              height={700}
              priority
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl 
              h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>

        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* FAQ Section */}
      <FaqSection />

    </main>
  )
}