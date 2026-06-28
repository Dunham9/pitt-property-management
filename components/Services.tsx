import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const fullyManagedItems = [
  "Rent Collection",
  "Maintenance Coordination",
  "Property Inspections",
  "Compliance",
  "Property Administration",
  "Tenant Management",
];

const smallerServices = [
  {
    title: "Rent Collection",
    description:
      "For landlords who prefer to manage their property while leaving rent collection and payment administration to us.",
    items: ["Rent Collection", "Rent Statements", "Payment Monitoring", "Arrears Follow-up"],
  },
  {
    title: "Property Maintenance",
    description:
      "Maintenance services for landlords, homeowners and businesses, delivered through trusted qualified contractors.",
    items: ["Plumbing", "Electrical", "Roofing", "Decorating", "General Repairs", "Planned Maintenance"],
  },
];

export default function Services() {
  return (
    <section className="bg-[var(--ppm-stone)] py-28">
      <Container>
        <SectionHeading
          eyebrow="Property Services"
          title="Boutique property services, designed around your investment."
          description="From full management to maintenance support, PPM provides a practical, professional service for landlords who value clarity and care."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-[var(--ppm-navy)] p-8 text-white shadow-xl lg:col-span-2 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--ppm-gold)]">
              Flagship Service
            </p>

            <h3 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Fully Managed
            </h3>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Complete property management for landlords who want peace of mind,
              professional oversight and a single point of contact.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {fullyManagedItems.map((item) => (
                <div
                  key={item}
                  className="border-t border-white/15 pt-4 text-white/90"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8">
            {smallerServices.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-[var(--ppm-navy)]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[var(--ppm-stone)] px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}