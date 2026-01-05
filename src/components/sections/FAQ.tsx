"use client";

export default function FAQ() {
  const faqs = [
    {
      question: "What is this template?",
      answer: "This is a modern, production-ready landing page template built with Next.js, TailwindCSS, and DaisyUI. It's designed to help you quickly launch beautiful SaaS landing pages."
    },
    {
      question: "Can I customize this template?",
      answer: "Absolutely! This template is fully customizable. You can modify colors, fonts, sections, and content to match your brand. All components are built with TailwindCSS for easy styling."
    },
    {
      question: "Do I need coding experience?",
      answer: "Basic knowledge of React and Next.js is helpful, but the template is well-documented and easy to customize. You can start by simply replacing the placeholder content with your own."
    },
    {
      question: "What's included in the template?",
      answer: "The template includes a complete landing page with Hero, Features, Pricing, FAQ, and CTA sections. It also includes a responsive navbar and footer, all built with modern best practices."
    }
  ];

  return (
    <section id="faq" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body font-bold text-[var(--color-coral)] uppercase tracking-[0.2em] text-xs mb-4">
            FAQ
          </p>
          <h2 className="font-display text-[2.5rem] md:text-[4rem] font-normal leading-[1.1] tracking-tight text-white mb-6">
            Frequently Asked <span className="italic text-[var(--color-text-secondary)]">Questions</span>
          </h2>
          <p className="font-body text-[var(--color-text-secondary)] text-lg">
            Everything you need to know about this template
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="collapse collapse-plus bg-[var(--color-dark-secondary)] border border-[var(--color-border-subtle)] rounded-[1.5rem] transition-all hover:border-[var(--color-border-strong)]"
            >
              <input type="radio" name="faq-accordion" defaultChecked={index === 0} /> 
              <div className="collapse-title text-lg font-bold text-white py-5">
                {faq.question}
              </div>
              <div className="collapse-content text-[var(--color-text-secondary)] font-body leading-relaxed">
                <p className="pb-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Ayuda adicional */}
        <div className="mt-12 text-center">
          <p className="font-body text-sm text-[var(--color-text-muted)]">
            Still have questions?{" "}
            <a href="#" className="text-[var(--color-pastel-orange)] font-bold hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}