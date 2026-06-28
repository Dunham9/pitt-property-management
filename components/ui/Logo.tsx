import Link from "next/link";

type LogoProps = {
  light?: boolean;
};

export default function Logo({ light = false }: LogoProps) {
  const primary = light ? "text-white" : "text-[var(--ppm-navy)]";
  const secondary = light ? "text-white/70" : "text-[var(--ppm-gold)]";

  return (
    <Link href="/" className="inline-block">
      <div className={`text-3xl font-semibold tracking-[0.2em] ${primary}`}>
        PPM
      </div>

      <div
        className={`mt-1 text-[10px] uppercase tracking-[0.45em] ${secondary}`}
      >
        Property Management
      </div>
    </Link>
  );
}