const Hero = () => {
  return (
    <section className="min-h-[400px] sm:min-h-[520px] md:min-h-[620px] lg:min-h-[720px] relative overflow-hidden">
      <img
        src="/images/contact/bg-1.png"
        alt="bg"
        className="absolute top-0 left-0 bottom-0 h-full -z-20"
      />
      <div className="w-[554px] h-[554px] rounded-full bg-[#FFCBC7] absolute bottom-5 left-[50%] translate-x-[-50%] -z-20"></div>
      <img
        src="/images/contact/bg-2.png"
        className="absolute top-0 lg:left-[290px] bottom-0 -z-20"
        alt=""
      />

      <div className="hidden lg:flex w-[658px] h-[658px] rounded-full bg-primary absolute top-[-328px] right-[-328px] items-center justify-center z-20">
        <div className="w-[600px] h-[600px] bg-white rounded-full flex items-center justify-center">
          <div className="w-[540px] h-[540px] bg-secondary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
