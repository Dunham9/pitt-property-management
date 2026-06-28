import Container from "./ui/Container";
import Section from "./ui/Section";

export default function Maintenance() {
  return (
    <Section background="white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--ppm-gold)]">
              Practical Experience
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--ppm-navy)] md:text-5xl">
              Property management shaped by real trade experience.
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 text-slate-700">
              Before founding PPM, I worked as a carpenter and built practical
              experience across property maintenance. That background shapes how
              we approach every property — with attention to detail, realistic
              advice and an understanding of what good workmanship looks like.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                "Trade background",
                "Practical judgement",
                "Trusted contractors",
              ].map((item) => (
                <div key={item} className="border-t border-slate-200 pt-4">
                  <p className="font-semibold text-[var(--ppm-navy)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}