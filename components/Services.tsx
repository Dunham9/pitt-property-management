import {
  Building2,
  Wallet,
  Wrench,
} from "lucide-react";

import Container from "./ui/Container";
import Section from "./ui/Section";
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
    title: "Rent Collect",
    icon: Wallet,
    description:
      "For landlords who prefer to manage their property whilst leaving rent collection and payment administration to us.",
    items: [
      "Rent Collection",
      "Rent Statements",
      "Payment Monitoring",
      "Arrears Follow-up",
    ],
  },
  {
    title: "Property Maintenance",
    icon: Wrench,
    description:
      "Maintenance services for landlords, homeowners and businesses using trusted qualified contractors. Our services include, but are not limited to:",
    items: [
      "Plumbing",
      "Electrical",
      "Roofing",
      "Decorating",
      "Refurbishment",
      "Planned Maintenance",
    ],
  },
];

export default function Services() {
  return (
    <Section background="stone">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Independent property management. Personal by design."
          description="From day-to-day management to long-term maintenance, every service is tailored to your property."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-[var(--ppm-navy)] p-8 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 md:p-12 lg:col-span-2">
            <Building2
              size={34}
              className="text-[var(--ppm-gold)]"
              strokeWidth={1.75}
            />

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--ppm-gold)]">
              Flagship Service
            </p>

            <h3 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Fully Managed
            </h3>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Complete property management for landlords who want professional
              oversight, practical support and complete peace of mind.
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
            {smallerServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon
                    size={30}
                    className="text-[var(--ppm-navy)]"
                    strokeWidth={1.75}
                  />

                  <h3 className="mt-6 text-2xl font-semibold text-[var(--ppm-navy)]">
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
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}