import Link from "next/link";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Repairnest", href: "/repairnest" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/10 px-6 py-3 shadow-sm backdrop-blur-md">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">
          PITT
        </Link>

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
          className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}