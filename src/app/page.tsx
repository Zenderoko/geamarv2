import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import VisionMision from "@/components/VisionMision";
import Servicios from "@/components/Servicios";
import Sostenibilidad from "@/components/Sostenibilidad";
import ParallaxBand from "@/components/ParallaxBand";
import Clientes from "@/components/Clientes";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Nosotros />
        <VisionMision />
        <Servicios />
        <Sostenibilidad />
        <ParallaxBand />
        <Clientes />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

