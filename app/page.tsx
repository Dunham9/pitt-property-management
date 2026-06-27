import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-slate-900">
        <Hero />
        <WhyChoose />
        <Services />
      </main>
    </>
  );
}