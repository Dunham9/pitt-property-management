import Link from "next/link";
import Logo from "./ui/Logo";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Repairnest", href: "/repairnest" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--ppm-stone)] px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-slate-200 pt-10 md:flex-row md:items-center md:justify-between">
        <Logo />

        <div className="flex flex-wrap gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 transition hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-sm text-slate-500">
          © 2026 Pitt Property Management.
        </p>
      </div>
    </footer>
  );
}