import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Maintenance from "@/components/Maintenance";
import Repairnest from "@/components/Repairnest";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-slate-900">
        <Hero />

<div id="services">
          <Services />
        </div>

        <div id="our-approach">
          <Maintenance />
        </div>



        <div id="repairnest">
          <Repairnest />
        </div>

        <div id="contact">
          <CTA />
        </div>
      </main>

      <Footer />
    </>
  );
}