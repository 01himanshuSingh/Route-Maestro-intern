import Image from "next/image";
import FeaturemotionCard from "./FeaturemotionCard";

function FeatureRightsidesection() {
  return (
    <div className="w-full min-h-screen bg-black">

      {/* HERO IMAGE SECTION */}
      <section
        className="
          relative w-auto
          h-[60vh]           /* mobile */
               lg:h-screen        /* desktop unchanged */
          overflow-hidden
        "
      >
        <Image
          src="/ai-trip-plan.webp"
          alt="Travel Demo"
          fill
          priority
          className="object-fill"
        />
      </section>

      {/* TITLE */}
      <div className="text-slate-300 px-3 sm:px-4 lg:px-2 py-4">
        <h2
          className="
            text-xl sm:text-2xl
            lg:text-4xl
            font-bold
            leading-tight
            max-w-full lg:max-w-xl
          "
        >
          AI Powered Trip Planning & Itinerary Management System
        </h2>
      </div>

      {/* STICKY MOTION CARDS */}
      <section className="relative w-full">
        <FeaturemotionCard />
      </section>

    </div>
  );
}

export default FeatureRightsidesection;