import { Building2, PoundSterling, Wrench } from "lucide-react";

import Container from "./ui/Container";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";

const services = [
  {
    title: "Property Management",
    icon: Building2,
    badge: "Fully Managed Available",
    description:
      "Complete management for landlords who want professional oversight, practical support and peace of mind.",
    items: [
      "Rent Collection",
      "Maintenance Coordination",
      "Property Inspections",
      "Compliance",
      "Property Administration",
    ],
  },
  {
    title: "Property Maintenance",
    icon: Wrench,
    badge: "Maintenance Services",
    description:
      "Planned and reactive maintenance for landlords, homeowners and businesses using trusted qualified contractors.",
    items: [
      "Plumbing",
      "Electrical Works",
      "Roofing",
      "Decorating",
      "General Repairs",
      "Refurbishments",
    ],
  },
  {
    title: "Rent Collection",
    icon: PoundSterling,
    badge: "Lighter-Touch Service",
    description:
      "For landlords who prefer to manage their property whilst leaving rent collection and payment administration to us.",
    items: [
      "Rent Collection",
      "Rent Statements",
      "Payment Monitoring",
      "Arrears Follow-Up",
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
          description="From property management to long-term maintenance, every service is tailored to your property."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon
                  size={32}
                  strokeWidth={1.75}
                  className="text-[var(--ppm-navy)]"
                />

                <p className="mt-6 inline-flex rounded-full bg-[var(--ppm-stone)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ppm-gold)]">
                  {service.badge}
                </p>

                <h3 className="mt-5 text-2xl font-semibold text-[var(--ppm-navy)]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-8 grid gap-3">
                  {service.items.map((item) => (
                    <div
                      key={item}
                      className="border-t border-slate-200 pt-3 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}