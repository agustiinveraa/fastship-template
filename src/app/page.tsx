import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import DemoSection from "@/components/sections/DemoSection";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";



export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <DemoSection />
      {/* <Features /> */}
      <Pricing />

      <CTA />
      <FAQ />
    </main>
  );
}
