"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import nextjsIcon from '../../../public/logos/nextjs_icon_dark.svg';
import tailwindcssIcon from '../../../public/logos/tailwindcss.svg';
import daisyuiIcon from '../../../public/logos/daisyui.svg';
import Link from 'next/link';
import Button from '../ui/Button';
import LogoIco from '@/app/favicon.ico';
// import heroImage from '../../../public/heroImage.webp'; // We will use src="/heroImage.webp"

export default function Hero() {
  const techStack = [
    { name: 'Next.js', icon: nextjsIcon },
    { name: 'TailwindCSS', icon: tailwindcssIcon },
    { name: 'DaisyUI', icon: daisyuiIcon },
  ];

  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const currentTech = techStack[currentTechIndex];

  // Auto-rotate tech stack every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [techStack.length]);

  return (
    <section className="relative w-full overflow-hidden px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        
        <div className="text-left space-y-8">
          
          <div className="inline-flex items-center bg-[rgba(255,236,153,0.1)] text-[#FFEC99] px-3 py-1 rounded-full text-sm font-semibold mb-6 border border-[var(--color-pastel-orange)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star w-4 h-4 mr-2" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            Stop reinventing the wheel
          </div>

          <h1 
            className="font-display text-[2.5rem] font-normal leading-[1.1] tracking-[-0.02em] text-white md:text-[4.5rem]"
          >
            Build stunning SaaS{" "}
            landing pages{" "}
            <span className="inline-block rounded-[0.25rem] bg-[var(--color-pastel-orange)] px-2 py-0.5 text-[#1A1825]">
            in minutes
            </span>
          </h1>
          
          <p className="text-lg leading-[1.7] text-[#B8B5C8] md:text-xl max-w-xl">
            A modern, production-ready landing page template built with Next.js, TailwindCSS, and DaisyUI. 
            Clean code, beautiful design, and ready to customize for your SaaS.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://github.com/agustiinveraa/fastship-template">
              <Button variant="primary" className="flex items-center gap-2">Get FastShip <Image src={LogoIco} width={20} height={20} alt="" className="mix-blend-multiply"/></Button>
            </Link>
          </div>

        </div>

        
        <div className="relative">
          <div className="relative overflow-hidden ">
             <Image 
               src="/heroImage.webp"
               alt="Template Preview"
               width={800}
               height={600}
               className="w-full h-auto object-cover"
               priority
             />
          </div>
          
          
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#7B61FF] rounded-full blur-[100px] opacity-20 -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[var(--color-pastel-orange)] rounded-full blur-[100px] opacity-20 -z-10"></div>
        </div>

      </div>
    </section>
  );
}


/*
// HERO 2
export default function Hero() {
  const techStack = [
    { name: 'Next.js', icon: nextjsIcon },
    { name: 'TailwindCSS', icon: tailwindcssIcon },
    { name: 'DaisyUI', icon: daisyuiIcon },
  ];

  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const currentTech = techStack[currentTechIndex];

  // Auto-rotate tech stack every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [techStack.length]);

  return (
    <section className="relative w-full overflow-hidden">
      <div 
        className="absolute inset-0"
      />
      
      <div className="relative mx-auto max-w-[900px] px-6 py-32 text-center md:px-8 md:py-32">
        <h1 
          className="mb-6 font-display text-[2.5rem] font-normal leading-[1.1] tracking-[-0.02em] text-white md:text-[4.5rem]"
        >
          Build stunning{" "}
          <span className="inline-flex items-center gap-1.5 sm:gap-2 ml-1.5 sm:ml-2 bg-white/10 rounded-lg px-2 sm:px-4 py-1.5 sm:py-2 overflow-hidden h-12 sm:h-20">
            <div className="shrink-0 transition-all duration-300">
              <Image
                src={currentTech.icon}
                alt={currentTech.name}
                width={40}
                height={40}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
              />
            </div>
            <span className="inline-flex items-center justify-center whitespace-nowrap transition-all duration-300">
              {currentTech.name}
            </span>
          </span>{" "}
          <span className="inline-block rounded-[0.25rem] bg-[var(--color-pastel-orange)] px-2 py-0.5 text-[#1A1825]">
            landing pages
          </span>{" "}
          in minutes
        </h1>
        
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-[1.7] text-[#B8B5C8] md:text-xl">
          A modern, production-ready landing page template built with Next.js, TailwindCSS, and DaisyUI. 
          Clean code, beautiful design, and ready to customize for your SaaS.
        </p>
        
        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            className="group relative rounded-[0.75rem] bg-[var(--color-pastel-orange)] px-6 py-3 text-base font-semibold text-[#1A1825] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFA178] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.4),0_4px_6px_-2px_rgba(0,0,0,0.25),0_0_20px_rgba(255,176,136,0.3)] active:translate-y-0"
          >
            Download Template
          </button>
          
          <button
            className="rounded-[0.75rem] border border-[rgba(255,255,255,0.12)] bg-transparent px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:border-[#FFB088] hover:bg-[rgba(255,176,136,0.05)] hover:text-[#FFB088]"
          >
            View on GitHub
          </button>
        </div>
        
        <div className="mx-auto w-full max-w-[850px] px-2 sm:px-0 relative pt-6">
  
          <div className="absolute -top-1 -right-2 md:-right-8 z-20">
            <a 
              href="#features" 
              className="inline-flex items-center gap-2 px-3 py-2 bg-[#ffeda0]/10 backdrop-blur-md border border-[#ffeda0]/30 rounded-lg transform rotate-3 hover:rotate-0 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#ffeda0] animate-pulse"></div>
              <p className="text-[10px] md:text-[11px] text-gray-200 font-code whitespace-nowrap">
                Ready to use <span className="text-[#ffeda0] font-bold group-hover:underline">components included</span>
              </p>
            </a>
          </div>
                  
          <div className="flex flex-col rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#1e1e2e] overflow-hidden text-left">
          
            <div className="flex items-center justify-between px-4 py-3 bg-[#181825]/80 border-b border-[rgba(255,255,255,0.05)] shrink-0">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] shadow-md"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] shadow-md"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] shadow-md"></div>
              </div>
              <div className="text-[9px] sm:text-[11px] font-code text-[var(--color-text-muted)] tracking-widest uppercase opacity-70 px-2 flex items-center gap-2">
                <span className="text-[#6FCF97]">TSX</span> page.tsx
              </div>
              <div className="hidden sm:block w-12 text-right">
                <div className="inline-block w-2 h-2 rounded-full bg-[#6FCF97] animate-pulse"></div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 md:p-8 overflow-x-auto selection:bg-[#56CCF2]/30">
              <pre className="m-0 text-left whitespace-pre font-code text-[11px] leading-[1.6] sm:text-sm md:text-[15px] text-white">
                <code>
                  <span className="text-[#56CCF2]">import</span>{" "}
                  <span className="text-white">{"{"}</span>
                  <span className="text-[#FFB088]"> Hero, Features, Pricing </span>
                  <span className="text-white">{"}"}</span>{" "}
                  <span className="text-[#56CCF2]">from</span>{" "}
                  <span className="text-[#6FCF97]">"@/components"</span>
                  <span className="text-white">;</span>
                  {"\n\n"}
                  <span className="text-[#56CCF2]">export default function</span>{" "}
                  <span className="text-[#6FCF97]">Home</span>
                  <span className="text-white">() {"{"}</span>
                  {"\n  "}
                  <span className="text-[#56CCF2]">return</span>
                  <span className="text-white"> (</span>
                  {"\n    "}
                  <span className="text-white">&lt;</span>
                  <span className="text-[#56CCF2]">main</span>
                  <span className="text-white">&gt;</span>
                  {"\n      "}
                  <span className="text-white">&lt;</span>
                  <span className="text-[#FFB088]">Hero</span>
                  <span className="text-white"> /&gt;</span>
                  {"\n      "}
                  <span className="text-white">&lt;</span>
                  <span className="text-[#FFB088]">Features</span>
                  <span className="text-white"> /&gt;</span>
                  {"\n      "}
                  <span className="text-white">&lt;</span>
                  <span className="text-[#FFB088]">Pricing</span>
                  <span className="text-white"> /&gt;</span>
                  {"\n    "}
                  <span className="text-white">&lt;/</span>
                  <span className="text-[#56CCF2]">main</span>
                  <span className="text-white">&gt;</span>
                  {"\n  "}
                  <span className="text-white">);</span>
                  {"\n"}
                  <span className="text-white">{"}"}</span>
                </code>
              </pre>
            </div>

          </div>

          
        </div>

        <div className="flex items-center justify-center gap-4 mt-8 md:mt-12 ">
          <span className="text-[10px] font-code text-[var(--color-text-muted)] uppercase tracking-widest">
            Built with
          </span>
          {techStack.map((tech) => (
            <div 
              key={tech.name}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10"
            >
              <Image 
                src={tech.icon} 
                alt={tech.name}
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span className="text-xs text-white/70">{tech.name}</span>
            </div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
*/
