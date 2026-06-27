const services = [
  {
    title: "Fully Managed",
    intro:
      "Our complete property management service for landlords who want peace of mind.",
    items: [
      "Rent Collection",
      "Maintenance Coordination",
      "Property Inspections",
      "Compliance",
      "Property Administration",
      "Tenant Management",
    ],
    featured: true,
  },
  {
    title: "Rent Collection",
    intro:
      "For landlords who prefer to manage their property themselves while leaving rent administration to us.",
    items: [
      "Rent Collection",
      "Rent Statements",
      "Payment Monitoring",
      "Arrears Follow-up",
    ],
    featured: false,
  },
  {
    title: "Property Maintenance",
    intro:
      "Professional maintenance services for landlords, homeowners and businesses, delivered through our trusted network of qualified contractors.",
    items: [
      "Plumbing",
      "Electrical",
      "Roofing",
      "Carpentry",
      "Decorating",
      "General Repairs",
      "Planned Maintenance",
      "Emergency Repairs",
    ],
    featured: false,
  },
];

export default function Services() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Property services designed around landlords, homes and long-term care.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-3xl border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                service.featured
                  ? "border-slate-950 bg-slate-950 text-white lg:col-span-1"
                  : "border-slate-200 bg-white text-slate-950"
              }`}
            >
              <h3 className="text-2xl font-semibold">{service.title}</h3>

              <p
                className={`mt-4 leading-7 ${
                  service.featured ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {service.intro}
              </p>

              <ul className="mt-8 space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span>{service.featured ? "✓" : "•"}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}