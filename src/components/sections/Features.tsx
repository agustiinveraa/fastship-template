import FeatureCard from "./FeatureCard";

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Unified API",
    description: "Connect to Shopify, WooCommerce, and Prestashop through a single, consistent API interface.",
  },
  {
    title: "Real-time Sync",
    description: "Keep your data synchronized across all platforms in real-time with automatic webhook handling.",
  },
  {
    title: "Developer First",
    description: "Built for developers with comprehensive documentation, SDKs, and developer-friendly error handling.",
  },
];

export default function Features() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Section Title */}
        <h2 className="mb-12 text-center font-display text-[2rem] font-normal leading-[1.2] tracking-[-0.015em] text-white md:mb-16 md:text-[3rem]">
          Everything you need to scale
        </h2>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

