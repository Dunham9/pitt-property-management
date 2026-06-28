"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Repairnest", href: "#repairnest" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setHasScrolled(window.scrollY > 80);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const navStyle = hasScrolled
  ? "border-white/50 bg-white/70 shadow-lg"
  : "border-white/20 bg-white/10 shadow-sm";

  const textStyle = hasScrolled
    ? "text-slate-700 hover:text-[var(--ppm-navy)]"
    : "text-white/80 hover:text-white";

  const buttonStyle = hasScrolled
    ? "bg-[var(--ppm-navy)] text-white hover:opacity-90"
    : "border border-white/40 text-white hover:bg-white hover:text-[var(--ppm-navy)]";

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav
        className={`mx-auto max-w-7xl rounded-3xl border px-6 py-3 backdrop-blur-md transition-all duration-300 ${navStyle}`}
      >
        <div className="flex items-center justify-between">
          <Logo light={!hasScrolled} />

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${textStyle}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition md:inline-flex ${buttonStyle}`}
          >
            Let&apos;s Talk
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-sm font-semibold transition md:hidden ${
              hasScrolled ? "text-[var(--ppm-navy)]" : "text-white"
            }`}
          >
            Menu
          </button>
        </div>

        {isOpen && (
          <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

          </div>
        )}
      </nav>
    </header>
  );
}