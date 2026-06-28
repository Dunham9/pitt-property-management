import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--ppm-stone)]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="border-t border-slate-200 pt-10">
          <div className="flex flex-col items-center gap-6 text-center">
            <Image
              src="/logo.png"
              alt="Pitt Property Management"
              width={220}
              height={88}
              className="h-14 w-auto"
              priority
            />

            <p className="max-w-md text-sm leading-7 text-slate-600">
           Boutique property management for landlords across West Sussex and the South Coast.
            </p>

            <div className="h-px w-16 bg-[var(--ppm-gold)]" />

            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Pitt Property Management. All rights
              reserved.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}