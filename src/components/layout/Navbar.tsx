import Link from "next/link";
import Button from "@/components/ui/Button";
import Image from "next/image";
import LogoIco from "@/app/favicon.ico"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(26,24,37,0.8)] backdrop-blur-[12px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 items-center px-6 py-4 md:grid-cols-3 md:px-8">
        
        <div className="flex justify-start ">
          <Link href="/" className="text-xl font-sans text-white flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={150} height={150} className="bg-[var(--color-cream)] p-2"/>
          </Link>
        </div>
        
        <div className="hidden items-center justify-center gap-8 md:flex">
          <Link
            href="#"
            className="text-sm font-medium text-[#B8B5C8] transition-colors hover:text-[var(--color-pastel-orange)]"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-[#B8B5C8] transition-colors hover:text-[var(--color-pastel-orange)]"
          >
            Demo
          </Link>
        </div>
        
        <div className="flex items-center justify-end gap-4">
          <Link href="https://github.com/agustiinveraa/fastship-template">
            <Button variant="primary" className="flex items-center gap-2">Get FastShip <Image src={LogoIco} width={20} height={20} alt="" className="mix-blend-multiply"/></Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
