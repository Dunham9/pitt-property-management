export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
          PROPERTY MANAGEMENT • MAINTENANCE • REPAIRNEST
        </p>

        <h1 className="max-w-4xl text-6xl font-semibold leading-tight text-white md:text-8xl">
          Professional property management, built on practical experience.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-white/90">
          Helping landlords protect their investment through professional
          management, trusted maintenance and clear communication.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/contact"
            className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Get in Touch
          </a>

          <a
            href="/services"
            className="rounded-full border border-white px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}