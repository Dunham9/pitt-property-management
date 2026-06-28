export default function Repairnest() {
  return (
    <section className="bg-[var(--ppm-navy)] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--ppm-gold)]">
            Repairnest
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Technology designed to support better maintenance.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Developed by PPM, Repairnest is a standalone maintenance platform
            created to improve repair reporting, contractor coordination and
            communication across the property industry.
          </p>

          <a
            href="/repairnest"
            className="mt-10 inline-flex rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
          >
            Discover Repairnest
          </a>
        </div>
      </div>
    </section>
  );
}