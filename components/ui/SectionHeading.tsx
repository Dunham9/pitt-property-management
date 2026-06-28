type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--ppm-gold)]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
      )}
    </div>
  );
}