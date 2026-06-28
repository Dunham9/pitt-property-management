import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-[var(--ppm-stone)] px-6 py-10">
      <div className="mx-auto max-w-7xl border-t border-slate-200 pt-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Logo />

            <p className="mt-4 text-sm text-slate-600">
              Boutique property management across West Sussex and the South Coast.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 Pitt Property Management
          </p>
        </div>
      </div>
    </footer>
  );
}