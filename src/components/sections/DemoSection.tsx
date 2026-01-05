import Image from 'next/image';
import ArrowVideo from '../../../public/arrow-with-scribble-svgrepo-com.svg';

export default function DemoSection() {
  return (
    <section id="demo" className="px-6 py-24 bg-[--color-cream]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-normal leading-tight tracking-tight text-[--color-text-on-cream] mb-6">
            See it in action <br />
            <span className="italic text-[--color-pastel-orange]">watch the demo</span>
          </h2>
          <p className="font-sans text-lg text-[--color-text-on-cream]/70 max-w-2xl mx-auto leading-relaxed">
          Add your product demo video or screenshot here to show how your SaaS works.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">

          <div className="max-lg:hidden absolute top-12 -left-8 -translate-x-full text-sm flex flex-col gap-2 items-end">
            <p className="font-serif italic text-lg text-[--color-pastel-orange]">Put your video here</p>
            <Image 
              src={ArrowVideo}
              alt="Arrow pointing to video" 
              width={60}
              height={60}
              className="invert-0" 
            />
          </div>

          {/* Video Container - Dark Glassmorphism Effect */}
          <div className="relative bg-[--color-dark-secondary] p-2 rounded-[2rem] border border-[--color-border-default]">
            <div className="aspect-video relative overflow-hidden rounded-[1.5rem]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/your-video-id" 
                title="Fastship Template"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Testimonial / Social Proof */}
        {/* <div className='space-y-3 max-w-fit mx-auto '>
            <div className='flex items-end gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-green-600" viewBox="0 0 35 30" fill="none"><path d="M22.3838 27.6777C23.5264 28.9961 25.3721 29.6992 27.4814 29.6992C31.6123 29.6992 34.249 26.9746 34.249 22.7559C34.249 18.625 31.5244 15.6367 27.6572 15.6367C26.8662 15.6367 25.9873 15.8125 25.1084 16.0762C24.5811 9.48438 27.833 4.03516 32.2275 2.36523L31.7881 0.871094C24.2295 3.77148 19.4834 11.1543 19.4834 19.8555C19.4834 22.668 20.5381 25.7441 22.3838 27.6777ZM0.499023 19.8555C0.499023 24.6895 3.22363 29.6992 8.49707 29.6992C12.54 29.6992 15.1768 26.9746 15.1768 22.7559C15.1768 18.625 12.4521 15.6367 8.67285 15.6367C7.88184 15.6367 7.00293 15.8125 6.12402 16.0762C5.59668 9.48438 8.84863 4.03516 13.2432 2.36523L12.7158 0.871094C5.24512 3.77148 0.499023 11.1543 0.499023 19.8555Z"></path></svg>
            <span className='text-sm'>Product Hunt review:</span>
            </div>
            <p className='italic'>&apos;&apos;Love how straightforward this is&apos;&apos;</p>
            <div className='flex items-center gap-2'>
            <Image 
                src="/ph-comments/1.avif" 
                alt="Chaitanya Agarwal" 
                width={35}
                height={35}
                className='rounded-full'
            />
            <span>Chaitanya Agarwal</span>
            <span className='rounded-full border border-green-600 text-green-600 px-1 text-sm'>AI Posture Coach</span>
            </div>
        </div> */}
      </div>
    </section>
  );
}