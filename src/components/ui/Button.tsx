import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text";
  children: ReactNode;
}

export default function Button({ 
  variant = "primary", 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "rounded-[0.75rem] px-6 py-3 text-base font-semibold transition-all duration-200";
  
  const variants = {
    primary: "bg-[var(--color-pastel-orange)] text-[#1A1825] hover:-translate-y-0.5 hover:bg-[var(--color-orange-hover)] active:translate-y-0",
    secondary: "border border-[rgba(255,255,255,0.12)] bg-transparent text-white hover:border-[var(--color-pastel-orange)] hover:bg-[rgba(255,176,136,0.05)] hover:text-[var(--color-pastel-orange)]",
    text: "bg-transparent text-[#B8B5C8] px-4 py-2 font-medium hover:text-[var(--color-pastel-orange)]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}

