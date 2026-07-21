import { Mail } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "./ui/Container";
import Section from "./ui/Section";

export default function CTA() {
  return (
    <Section background="stone" className="pb-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--ppm-gold)]">
              Let's Talk
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--ppm-navy)] md:text-5xl">
              We'd love to hear about your property.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Whether you're looking for property management or reliable
              maintenance services, we'd love to discuss how PPM can help.
            </p>

            <div className="mt-10">
              <Button href="mailto:hello@pittpropertymanagement.co.uk">
                Let's Talk
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-xl rounded-[2rem] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <Mail
                size={28}
                strokeWidth={1.75}
                className="text-[var(--ppm-navy)]"
              />

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--ppm-gold)]">
                Email
              </p>

              <p className="mt-3 break-all text-lg font-medium text-[var(--ppm-navy)]">
                hello@pittpropertymanagement.co.uk
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}