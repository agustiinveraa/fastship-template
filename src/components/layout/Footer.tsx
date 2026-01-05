import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import LogoIco from '@/app/favicon.ico';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "TEMPLATE",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Components", href: "#" },
        { name: "Pricing", href: "#pricing" },
        { name: "GitHub", href: "#" },
      ],
    },
    {
      title: "TECH STACK",
      links: [
        { name: "Next.js", href: "#" },
        { name: "TailwindCSS", href: "#" },
        { name: "DaisyUI", href: "#" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { name: "Blog", href: "#" },
        { name: "Changelog", href: "#" },
        { name: "License", href: "#" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Community", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
  ];

  return (
    <footer className="px-6 pt-24 pb-12 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          
          {/* Logo & Status Area */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/logo.svg" alt="Logo" width={150} height={150} className="bg-[var(--color-cream)] p-2" />
            </div>
            
            <p className="font-body text-[var(--color-text-secondary)] max-w-xs mb-8 leading-relaxed">
              A modern, production-ready landing page template. Built with Next.js, TailwindCSS, and DaisyUI.
            </p>

            <div className="flex flex-wrap gap-4 text-[10px] font-code uppercase tracking-widest">
              <div className="flex items-center gap-2 text-[var(--color-success)]">
                <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                Open Source
              </div>
              <div className="flex items-center gap-2 text-[var(--color-text-tertiary)]">
                <span className="w-2 h-2 rounded-full bg-current"></span>
                MIT License
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h4 className="font-code text-[10px] font-black tracking-[0.2em] text-white opacity-40">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="font-body text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-pastel-orange)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-border-subtle)] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-body text-[var(--color-text-muted)]">
              Agustín Vera © {currentYear}. Built with ❤️ for developers.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="https://github.com/agustiinveraa/fastship-template" className="text-[var(--color-text-tertiary)] hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Link>
            <Link href="https://github.com/agustiinveraa/fastship-template">
              <Button variant="primary" className="flex items-center gap-2">Get FastShip <Image src={LogoIco} width={20} height={20} alt="" className="mix-blend-multiply"/></Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}