import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-[0.5rem] border border-[rgba(255,255,255,0.08)] bg-[#2D2A3A] px-4 py-3 text-base text-white transition-all duration-200 placeholder:text-[#605D70] focus:border-[var(--color-pastel-orange)] focus:outline-none focus:ring-0 focus:ring-[var(--color-pastel-orange)] focus:ring-offset-0 focus:ring-offset-0 ${className || ''}`}
      {...props}
    />
  );
}

