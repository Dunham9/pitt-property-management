import Card from "./ui/Card";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const features = [
  {
    title: "Fully Managed",
    description:
      "Complete day-to-day property management, giving landlords confidence that their investment is being looked after properly.",
  },
  {
    title: "Rent Collection",
    description:
      "Reliable rent collection, clear statements and prompt communication so landlords stay informed.",
  },
  {
    title: "Maintenance Expertise",
    description:
      "Real maintenance experience helps us make practical decisions, manage repairs efficiently and communicate clearly with contractors.",
  },
  {
    title: "No Hidden Fees",
    description:
      "Straightforward pricing, clear terms and no unexpected charges.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[var(--ppm-stone)] py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Choose PPM"
          title="Professional property management with practical experience."
          description="Everything we do is built around clear communication, practical knowledge and protecting your investment."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <h3 className="text-xl font-semibold text-slate-950">
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