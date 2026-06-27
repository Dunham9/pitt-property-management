export default function Repairnest() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
              Repairnest
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Our maintenance platform, built for the property industry.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Repairnest is being developed by PPM to help manage maintenance
              requests clearly and efficiently. We’ll use it within PPM, while
              also building it as a standalone product for landlords, agents and
              property managers.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <div className="grid gap-4">
              {[
                "Built by PPM",
                "Used for maintenance coordination",
                "Designed for landlords and property managers",
                "Clearer repair tracking",
                "Developed as a standalone product",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}