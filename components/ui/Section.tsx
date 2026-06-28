type SectionProps = {
  children: React.ReactNode;
  background?: "white" | "stone" | "navy";
  className?: string;
};

export default function Section({
  children,
  background = "white",
  className = "",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white text-slate-900",
    stone: "bg-[var(--ppm-stone)] text-slate-900",
    navy: "bg-[var(--ppm-navy)] text-white",
  };

  return (
    <section className={`${backgrounds[background]} py-28 ${className}`}>
      {children}
    </section>
  );
}