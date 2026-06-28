import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light" | "outline";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-[var(--ppm-navy)] text-white hover:opacity-90",
    light:
      "bg-white text-[var(--ppm-navy)] hover:bg-slate-100",
    outline:
      "border border-white/30 text-white hover:bg-white hover:text-[var(--ppm-navy)]",
  };

  return (
    <Link
      href={href}
      className={`inline-flex rounded-full px-7 py-3 text-sm font-semibold transition ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}