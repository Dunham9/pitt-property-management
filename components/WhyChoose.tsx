import Card from "./ui/Card";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const features = [
  {
    title: "Boutique Service",
    description:
      "A personal, considered approach for landlords who value quality over volume.",
  },
  {
    title: "Practical Experience",
    description:
      "A background in carpentry and property maintenance shapes how we look after every property.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear fees, straightforward terms and no unexpected surprises.",
  },
  {
    title: "Clear Communication",
    description:
      "Simple updates, honest advice and a professional service from start to finish.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeading
          eyebrow="Why PPM"
          title="Professional. Practical. Personal."
          description="A boutique property management company built around trust, clarity and real property experience."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <h3 className="text-xl font-semibold text-[var(--ppm-navy)]">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}