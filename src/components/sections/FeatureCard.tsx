interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="group cursor-pointer rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#2D2A3A] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.12)]">
      {/* Feature Icon */}
      <div className="mb-4 h-12 w-12 rounded-lg bg-[var(--color-pastel-orange)]/10 flex items-center justify-center">
        {icon || <div className="h-6 w-6 rounded bg-[var(--color-pastel-orange)]" />}
      </div>
      
      {/* Feature Title */}
      <h3 className="mb-3 text-xl font-medium leading-[1.3] tracking-[-0.01em] text-white">
        {title}
      </h3>
      
      {/* Feature Description */}
      <p className="text-base leading-[1.6] text-[#B8B5C8]">
        {description}
      </p>
    </div>
  );
}

