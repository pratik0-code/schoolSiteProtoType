import Hero from "@/components/Hero";
import About from "@/components/About";
import PrincipalMessage from "@/components/PrincipalMessage";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PrincipalMessage />
      <Features />
      <Gallery />
      <Contact />
    </>
  );
}
