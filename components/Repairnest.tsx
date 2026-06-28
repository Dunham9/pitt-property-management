import Button from "@/components/ui/Button";
import Container from "./ui/Container";
import Section from "./ui/Section";

export default function Repairnest() {
  return (
    <Section background="navy">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--ppm-gold)]">
            Repairnest
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Technology designed to support better maintenance.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Developed by PPM, Repairnest is a standalone maintenance platform
            created to improve repair reporting, contractor coordination and
            communication across the property industry.
          </p>

          <div className="mt-10">
            <Button href="/repairnest" variant="outline">
              Discover Repairnest
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}