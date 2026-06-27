export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-24 pt-40">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
        PROPERTY MANAGEMENT • LANDLORD SERVICES
      </p>

      <h1 className="max-w-5xl text-6xl font-semibold leading-tight tracking-tight text-slate-950 md:text-8xl">
        Property management built on trust, clarity and practical experience.
      </h1>

      <p className="mt-10 max-w-3xl text-xl leading-9 text-slate-600">
        PPM provides rent collection and fully managed property services, with
        clear communication, transparent pricing and real maintenance experience
        at the heart of what we do.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="/contact"
          className="rounded-full bg-slate-950 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Get in Touch
        </a>

        <a
          href="/services"
          className="rounded-full border border-slate-300 px-7 py-4 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-950"
        >
          View Services
        </a>
      </div>
    </section>
  );
}