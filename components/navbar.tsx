"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Our Approach", href: "#our-approach" },
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 const navStyle =
  "border-slate-200 bg-white/95 shadow-lg";

const textStyle =
  "text-[var(--ppm-navy)] hover:opacity-70 transition";

const buttonStyle =
  "bg-[var(--ppm-navy)] text-white hover:opacity-90";

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav
        className={`mx-auto max-w-7xl rounded-3xl border px-6 py-4 backdrop-blur-md transition-all duration-300 ${navStyle}`}
      >
        <div className="flex items-center justify-between">
          <Logo />

          <div className="hidden flex-1 justify-center md:flex">
            <div className="flex items-center gap-8">
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
          </div>

          <div className="hidden w-56 justify-end md:flex">
            <a
              href="#contact"
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${buttonStyle}`}
            >
              Let&apos;s Talk
            </a>
          </div>

   <button
  type="button"
  onClick={() => setIsOpen((current) => !current)}
  aria-label="Toggle navigation"
  aria-expanded={isOpen}
  className="ml-auto text-sm font-semibold text-[var(--ppm-navy)] transition hover:opacity-70 md:hidden"
>
  {isOpen ? "Close" : "Menu"}
</button>

</div>

{isOpen && (
  <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 md:hidden">
    ...
  </div>
)}

        {isOpen && (
          <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--ppm-navy)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-2 rounded-full bg-[var(--ppm-navy)] px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}