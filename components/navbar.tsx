import Link from "next/link";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Landlords", href: "/landlords" },
  { label: "Tenants", href: "/tenants" },
  { label: "Repairnest", href: "/repairnest" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200 bg-white/90 px-6 py-3 shadow-sm backdrop-blur">
        <Link href="/" className="text-lg font-bold tracking-tight text-slate-950">
          PPM
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}