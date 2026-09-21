import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import LaptopSection from "./components/LaptopSection";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <LaptopSection />
      <Stats />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
