import FaqSection from "../components/FaqSection";
import FeatureRightsidesection from "./FeatureRightsidesection";
import { FeatureScheduledemocard } from "./FeatureScheduledemocard";

export default function Home() {
  return (
    <div className="min-h-screen pt-2 bg-black text-white">

      {/* MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row mt-12">

        {/* LEFT SIDE */}
        <aside
          className="
            w-full
            lg:w-1/3
            lg:sticky lg:top-12
            lg:h-screen
          "
        >
          <FeatureScheduledemocard />
        </aside>

        {/* RIGHT SIDE */}
        <section
          className="
            w-full
            lg:w-2/3
            lg:h-screen
            lg:overflow-y-auto
                no-scrollbar

          "
        >
          <div className="p-4 md:p-6 lg:p-8">
            <FeatureRightsidesection />
          </div>
        </section>

      </div>

      {/* FAQ SECTION */}
      <section className="w-full px-4 md:px-6 lg:px-8 py-12">
        <FaqSection />
      </section>

    </div>
  );
}