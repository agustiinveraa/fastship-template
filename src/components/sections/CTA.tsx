export default function CTA() {
  return (
    <section className="px-6 py-24 overflow-hidden relative ">
      
      <div className="max-w-4xl mx-auto text-center relative z-10 ">
        <h2 className="font-display text-[3rem] md:text-[5rem] text-white leading-[1] mb-8 tracking-tighter">
          Ready to launch your <br />
          <span className="italic text-[--color-pastel-orange]">next project?</span>
        </h2>
        
        <p className="font-sans text-lg md:text-xl text-[#B8B5C8] mb-12 max-w-2xl mx-auto leading-relaxed">
        Stop wasting time on boilerplate. Download this template and start building your SaaS landing page today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto px-10 py-5 bg-[var(--color-pastel-orange)] text-[var(--color-dark-primary)] rounded-full font-black text-lg transition-all hover:scale-105 flex items-center justify-center gap-2">
            Download Now
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
          <button className="w-full sm:w-auto px-10 py-5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-all">
            View on GitHub
          </button>
        </div>
      </div>
    </section>
  );
}