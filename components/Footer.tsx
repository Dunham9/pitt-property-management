import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--ppm-stone)]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="border-t border-slate-200 pt-16">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/ppm-logo-horizontal.svg"
              alt="Pitt Property Management"
              width={340}
              height={136}
              className="h-24 w-auto"
              priority
            />

            <p className="mt-8 text-sm tracking-[0.12em] text-slate-500">
              Property Management • Property Maintenance • Rent Collection
            </p>

            <div className="mt-10 h-px w-20 bg-[var(--ppm-gold)]" />

            <p className="mt-10 text-sm text-slate-400">
              © {new Date().getFullYear()} Pitt Property Management
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}