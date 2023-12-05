import Apply from "@/components/career/Apply";
import Hero from "@/components/career/Hero";
import Opportunities from "@/components/career/Opportunities";
import Contact from "@/components/shared/Contact";

const CareerPage = () => {
  return (
    <main className="mt-[72px]">
      <Hero />
      <Opportunities />
      <Apply />
      <Contact />
    </main>
  );
};

export default CareerPage;
