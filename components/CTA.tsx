export default function CTA() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl bg-slate-950 px-8 py-16 text-center text-white md:px-16">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
          Get in Touch
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Ready to discuss your property?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
          Whether you need full management, rent collection or property
          maintenance, PPM is here to help.
        </p>

        <a
          href="/contact"
          className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
        >
          Contact PPM
        </a>
      </div>
    </section>
  );
}