import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[76vh] items-end overflow-hidden md:min-h-[82vh]"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(13,27,42,0.65)] via-[rgba(13,27,42,0.45)] to-[rgba(13,27,42,0.6)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-32 sm:px-6 md:pb-20 md:pt-36">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/75 md:text-xs">
          Boutique Property Management
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Looking after your investment with confidence.
        </h1>

        <div className="mt-6 h-px w-24 bg-[var(--ppm-gold)]" />

        <p className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">
          Boutique property management, maintenance and rent collection for
          landlords across West Sussex and the South Coast.
        </p>

        <div className="mt-7 md:mt-8">
          <Button href="#contact" variant="light">
            Arrange a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}