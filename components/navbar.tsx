"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./ui/Logo";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Repairnest", href: "/repairnest" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto max-w-7xl rounded-3xl border border-white/20 bg-white/10 px-6 py-3 shadow-sm backdrop-blur-md">
        <div className="flex items-center justify-between">
          <Logo light />

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950 md:inline-flex"
          >
            Contact
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm font-semibold text-white md:hidden"
          >
            Menu
          </button>
        </div>

        {isOpen && (
          <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/80"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="rounded-full border border-white/40 px-5 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}