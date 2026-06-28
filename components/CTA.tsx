import Button from "./ui/Button";
import Section from "./ui/Section";

export default function CTA() {
  return (
    <Section background="stone">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--ppm-gold)]">
          Get in Touch
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--ppm-navy)] md:text-5xl">
          Ready to discuss your property?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Whether you need full management, rent collection or professional
          maintenance, we’d be delighted to discuss how PPM can help.
        </p>

        <div className="mt-10">
          <Button href="/contact">Contact PPM</Button>
        </div>
      </div>
    </Section>
  );
}