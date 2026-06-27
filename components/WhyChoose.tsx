const features = [
  {
    title: "Fully Managed",
    description:
      "Complete day-to-day property management, giving landlords confidence that their investment is being looked after properly.",
  },
  {
    title: "Rent Collection",
    description:
      "Reliable rent collection, clear statements and prompt communication so landlords stay informed.",
  },
  {
    title: "Maintenance Expertise",
    description:
      "Real maintenance experience helps us make practical decisions, manage repairs efficiently and communicate clearly with contractors.",
  },
  {
    title: "No Hidden Fees",
    description: "Straightforward pricing, clear terms and no unexpected charges.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Why Choose PPM
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Practical, transparent property management.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-950">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}