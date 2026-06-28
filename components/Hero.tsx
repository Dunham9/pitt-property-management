export default function Hero() {
  return (
    <section
      className="relative flex min-h-[82vh] items-end"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/75">
          Boutique Property Management
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
          Professional property management, built on practical experience.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">
          Boutique management, maintenance and rent collection services for
          landlords who value professionalism, communication and practical
          expertise.
        </p>

        <div className="mt-8">
          <a
            href="/contact"
            className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}