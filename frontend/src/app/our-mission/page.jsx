import Missions from "@/components/our-mission/Missions";
import Contact from "@/components/shared/Contact";
import Line from "@/components/shared/Line";

const OurMissionPage = () => {
  return (
    <main className="mt-[72px] ">
      <section className="relative min-h-[350px] sm:min-h-[670px] flex justify-between items-center px-5 lg:px-0">
        <div className="container z-40">
          <h2 className="text-[50px] sm:text-[60px] text-secondary lg:text-primary leading-[75px]">
            Our <br />
            Mission
          </h2>
          <Line className="bg-secondary lg:bg-primary" />
        </div>

        <img
          src="/images/our-mission.png"
          className="absolute top-0 right-0 bottom-0 z-20"
          alt=""
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 810 759"
          fill="none"
          className="h-[600px] sm:h-[700px] md:h-[750px] lg:h-[900px] w-full sm:w-[810px] absolute -top-40 right-0 bottom-0 -z-20"
        >
          <path
            d="M134.5 656.5C-43.7707 644.515 164.299 338.288 134.5 216.5C134.5 216.5 91.5 51.5 5.99997 -2.99994C-79.5 -57.4999 844.466 65 844.466 65C844.466 65 856.676 758.999 812.196 758.999H655.206C558.396 749.334 590.159 720.379 508.682 634.311C366.173 504.353 357.338 671.482 134.5 656.5Z"
            fill="#F14336"
          />
        </svg>
      </section>

      <Missions />
      <Contact />
    </main>
  );
};

export default OurMissionPage;
