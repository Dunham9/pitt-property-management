import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Repairnest", href: "/repairnest" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-bold tracking-tight">PITT</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            Property Management
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-sm text-white/40">
          © 2026 Pitt Property Management. All rights reserved.
        </p>
      </div>
    </footer>
  );
}