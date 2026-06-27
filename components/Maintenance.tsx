export default function Maintenance() {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Maintenance Expertise
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Property management backed by practical maintenance experience.
          </h2>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-xl leading-9 text-slate-700">
            Good property management is about more than collecting rent. With a
            background in property maintenance, PPM understands how to prioritise
            repairs, communicate clearly with contractors and protect properties
            for the long term.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="font-semibold text-slate-950">Practical</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Real-world understanding of property repairs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="font-semibold text-slate-950">Proactive</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Helping issues get handled before they grow.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="font-semibold text-slate-950">Trusted</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Working with reliable contractors and clear updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}