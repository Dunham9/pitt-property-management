import { Hammer, Handshake, MessageCircle, ReceiptText } from "lucide-react";

import Container from "./ui/Container";
import Section from "./ui/Section";

const values = [
  {
    title: "Boutique Service",
    icon: Handshake,
    description:
      "A personal, considered approach for landlords who value quality over volume.",
  },
  {
    title: "Practical Experience",
    icon: Hammer,
    description:
      "A background in carpentry and property maintenance shapes how we look after every property.",
  },
  {
    title: "Transparent Pricing",
    icon: ReceiptText,
    description: "Clear fees, straightforward terms and no unexpected surprises.",
  },
  {
    title: "Clear Communication",
    icon: MessageCircle,
    description:
      "Simple updates, honest advice and professional service from start to finish.",
  },
];

export default function Maintenance() {
  return (
    <Section background="white">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--ppm-gold)]">
              About PPM
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--ppm-navy)] md:text-5xl">
              Built on practical experience.
            </h2>

            <p className="mt-6 text-xl leading-9 text-slate-700">
              Property management is about more than administration. Before
              founding PPM, I worked as a carpenter and built practical
              experience across property maintenance.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              That background shapes how we approach every property — with
              attention to detail, realistic advice and an understanding of what
              good workmanship looks like.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-[2rem] bg-[var(--ppm-stone)] p-8"
                >
                  <Icon
                    size={28}
                    strokeWidth={1.75}
                    className="text-[var(--ppm-navy)]"
                  />

                  <h3 className="mt-6 text-xl font-semibold text-[var(--ppm-navy)]">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {value.description}
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