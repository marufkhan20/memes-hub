import About from "@/components/home/About";
import Advertise from "@/components/home/Advertise";
import Community from "@/components/home/Community";
import Discover from "@/components/home/Discover";
import Hero from "@/components/home/Hero";
import Share from "@/components/home/Share";
import Contact from "@/components/shared/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Discover />
      <Share />
      <Community />
      <Advertise />
      <Contact />
    </main>
  );
}
