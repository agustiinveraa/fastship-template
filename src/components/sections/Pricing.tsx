"use client";

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Tag */}
        <p className="font-body font-bold text-[var(--color-coral)] uppercase tracking-[0.2em] text-xs mb-4">
          Pricing
        </p>
        
        {/* Main Title */}
        <h2 className="font-display text-[2.5rem] md:text-[4rem] font-normal leading-[1.1] tracking-tight text-white mb-16">
          Simple, transparent <br />
          <span className="italic text-[var(--color-text-secondary)]">pricing for everyone</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Free Plan */}
          <div className="border border-[var(--color-border-default)] rounded-[2.5rem] p-8 lg:p-12 transition-all duration-300 hover:border-[var(--color-border-strong)] group/card">
            <h3 className="font-display text-3xl mb-2 text-white">Free</h3>
            <div className="font-body font-bold text-5xl mb-6 text-white">$0</div>
            <p className="font-body text-[var(--color-text-secondary)] mb-8">Perfect for personal projects</p>
            
            <ul className="text-left space-y-4 mb-10">
              {[
                "Full source code access",
                "All components included",
                "Community support"
              ].map((item) => (
                <li key={item} className="flex items-center font-body text-[var(--color-text-secondary)]">
                  <svg className="w-5 h-5 text-[var(--color-pastel-orange)] mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full border border-[var(--color-border-strong)] hover:bg-white/5 text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group">
              Download Free
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-[var(--color-dark-secondary)] rounded-[2.5rem] p-8 lg:p-12 relative border-2 border-[var(--color-pastel-orange)]/30 transition-transform hover:scale-[1.01]">
            {/* Floating Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-[var(--color-pastel-orange)] text-[var(--color-dark-primary)] px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                🔥 Recommended
              </span>
            </div>
            
            <h3 className="font-display text-3xl mb-2 text-white text-left">Pro</h3>
            <div className="font-body font-bold text-5xl mb-6 text-white text-left">
              $49<span className="text-xl font-normal opacity-50">/once</span>
            </div>
            <p className="font-body text-[var(--color-text-secondary)] mb-8 text-left text-sm md:text-base">
              Everything you need for commercial projects
            </p>
            
            <ul className="text-left space-y-4 mb-10">
              <li className="flex items-center font-body text-white">
                <svg className="w-5 h-5 text-[var(--color-pastel-orange)] mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="relative">
                   <span className="absolute bg-[var(--color-pastel-orange)]/10 -inset-x-2 -inset-y-1 rounded rotate-1"></span>
                   <span className="relative font-bold">Commercial license</span>
                </span>
              </li>
              {[
                "Lifetime updates",
                "Premium support",
                "Custom components",
                "Figma design files"
              ].map((item) => (
                <li key={item} className="flex items-center font-body text-[var(--color-text-secondary)]">
                  <svg className="w-5 h-5 text-[var(--color-pastel-orange)] mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full bg-[var(--color-pastel-orange)] hover:bg-[var(--color-orange-hover)] text-[var(--color-dark-primary)] py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 group">
              Get Pro Access
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Section Footer */}
        <div className="mt-12 text-center">
            <p className="font-body text-sm text-[var(--color-text-muted)]">
              Need a custom solution?{" "}
              <button className="text-[var(--color-coral)] font-bold hover:underline underline-offset-4 decoration-2">
                Contact us
              </button>
            </p> 
        </div>
      </div>
    </section>
  );
}