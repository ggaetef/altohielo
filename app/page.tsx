import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifiesto from "@/components/Manifiesto";
import Productos from "@/components/Productos";
import Clientes from "@/components/Clientes";
import Proceso from "@/components/Proceso";
import Galeria from "@/components/Galeria";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function Home() {
  return (
    <main>
      <LocalBusinessSchema />
      <Nav />
      <Hero />
      <Manifiesto />
      <Productos />
      <Clientes />
      <Proceso />
      <Galeria />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
