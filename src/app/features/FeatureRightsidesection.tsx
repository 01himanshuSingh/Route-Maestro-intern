import Image from "next/image";
import FeaturemotionCard from "./FeaturemotionCard";

function FeatureRightsidesection() {
  return (
    <div className="w-full min-h-screen bg-black">

      {/* HERO IMAGE SECTION */}
  <section
  className="
    relative
    w-full
    h-[45vh]          /* mobile */
    sm:h-[55vh]       /* tablet */
    lg:h-screen       /* desktop SAME */
    overflow-hidden
  "
>
  <Image
    src="/ai-trip-plan.webp"
    alt="Travel Demo"
    fill
    priority
    className="
      object-fill
      object-center
    "
    sizes="(max-width: 1024px) 100vw, 66vw"
  />
</section>
      {/* TITLE */}
      <div className="text-slate-300 flex justify-center px-3 sm:px-4 lg:px-2 py-3">
        <h2
          className="
            text-xl sm:text-2xl
            lg:text-4xl
            font-bold
            leading-tight
            max-w-full lg:max-w-xl
            mt-4
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