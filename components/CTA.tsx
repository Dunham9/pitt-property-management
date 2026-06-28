import { Mail, MapPin, Phone } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "./ui/Container";
import Section from "./ui/Section";

const contactDetails = [
  {
    label: "Email",
    value: "hello@pittpropertymanagement.co.uk",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "Coming soon",
    icon: Phone,
  },
  {
    label: "Service Area",
    value: "West Sussex, with a focus on the South Coast",
    icon: MapPin,
  },
];

export default function CTA() {
  return (
   <Section background="stone" className="pb-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--ppm-gold)]">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--ppm-navy)] md:text-5xl">
              Let&apos;s talk about your property.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Whether you need full management, rent collection or professional
              maintenance, we’d be delighted to discuss how PPM can help.
            </p>

            <div className="mt-10">
              <Button href="mailto:hello@pittpropertymanagement.co.uk">
                Email PPM
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;

              return (
                <div
                  key={detail.label}
                  className="rounded-[2rem] bg-white p-8 shadow-sm"
                >
                  <Icon
                    size={28}
                    strokeWidth={1.75}
                    className="text-[var(--ppm-navy)]"
                  />

                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--ppm-gold)]">
                    {detail.label}
                  </p>

                  <p className="mt-3 text-lg font-medium text-[var(--ppm-navy)]">
                    {detail.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}