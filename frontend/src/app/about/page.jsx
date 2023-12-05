import About from "@/components/about/About";
import Reviews from "@/components/about/Reviews";
import Services from "@/components/about/Services";
import Story from "@/components/about/Story";
import Contact from "@/components/shared/Contact";

const AboutPage = () => {
  return (
    <main className="mt-[72px]">
      <header>
        <img
          src="/images/about-banner.png"
          alt="about-banner"
          className="w-full"
        />
      </header>
      <About />
      <Story />
      <Services />
      <Reviews />
      <Contact />
    </main>
  );
};

export default AboutPage;
