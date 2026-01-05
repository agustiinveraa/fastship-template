import React from 'react';

export default function ProblemSection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-normal leading-tight tracking-tight text-white mb-6">
            The problem your SaaS solves <br />
            <span className="italic">goes here</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-[#B8B5C8] max-w-3xl mx-auto leading-relaxed">
          Describe the pain points your target audience faces. Make it relatable and specific.
          </p>
        </div>

        {/* Step by Step Process */}
        <div className="text-center">
          <h3 className="font-display text-[2rem] md:text-[2.5rem] font-normal text-white mb-16 tracking-tight">
            How it works in 3 simple steps
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Step 1 */}
            <div className="relative group">
              <div className="w-14 h-14 bg-[var(--color-pastel-orange)] text-[#1A1825] rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto transition-transform">
                1
              </div>
              <h4 className="font-display text-2xl text-white mb-4 tracking-tight">First Step</h4>
              <p className="font-sans text-[#B8B5C8] leading-relaxed">
              Describe the first step your users take. Keep it simple and actionable.
              </p>
              
              {/* Curved Arrow (Visible only on desktop) */}
              <div className="absolute top-8 -right-10 hidden lg:block">
                <svg className="w-16 h-16 fill-[var(--color-pastel-orange)] opacity-30 -rotate-90" viewBox="0 0 138 138">
                  <path fillRule="evenodd" clipRule="evenodd" d="M72.9644 5.31431C98.8774 43.8211 83.3812 88.048 54.9567 120.735C54.4696 121.298 54.5274 122.151 55.0896 122.639C55.6518 123.126 56.5051 123.068 56.9922 122.506C86.2147 88.9044 101.84 43.3918 75.2003 3.80657C74.7866 3.18904 73.9486 3.02602 73.3287 3.44222C72.7113 3.85613 72.5484 4.69426 72.9644 5.31431Z"></path>
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="w-14 h-14 bg-[var(--color-pastel-orange)] text-[#1A1825] rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto transition-transform">
                2
              </div>
              <h4 className="font-display text-2xl text-white mb-4 tracking-tight">Second Step</h4>
              <p className="font-sans text-[#B8B5C8] leading-relaxed">
              Explain what happens next. Focus on the value they get at this stage.
              </p>
              
              {/* Curved Arrow */}
              <div className="absolute top-8 -right-10 hidden lg:block">
                <svg className="w-16 h-16 fill-[var(--color-pastel-orange)] opacity-30 -rotate-90" viewBox="0 0 138 138">
                  <path fillRule="evenodd" clipRule="evenodd" d="M72.9644 5.31431C98.8774 43.8211 83.3812 88.048 54.9567 120.735C54.4696 121.298 54.5274 122.151 55.0896 122.639C55.6518 123.126 56.5051 123.068 56.9922 122.506C86.2147 88.9044 101.84 43.3918 75.2003 3.80657C74.7866 3.18904 73.9486 3.02602 73.3287 3.44222C72.7113 3.85613 72.5484 4.69426 72.9644 5.31431Z"></path>
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="w-14 h-14 bg-[var(--color-pastel-orange)] text-[#1A1825] rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto transition-transform">
                3
              </div>
              <h4 className="font-display text-2xl text-white mb-4 tracking-tight">Final Step</h4>
              <p className="font-sans text-[#B8B5C8] leading-relaxed">
              Show the end result. This is where you highlight the transformation or outcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}