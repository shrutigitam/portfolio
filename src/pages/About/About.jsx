import HeroImg from "@/assets/images/hero.png";
import Meteors from "@/components/ui/meteors";

const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <pattern
            id="grid-about"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40 animate-gridPulse"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-about)" />
        </svg>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <>
      <section id="about" className="min-h-screen flex items-center justify-center relative py-16 md:py-32 text-white bg-[#020617]">
        {/* Background Effects */}
        <GridBackground />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={10} />
        </div>

        {/* Decorative blurs */}
        <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-10 relative z-10">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="relative inline-block">
              I&apos;m
              <span className="typing-effect gradient-text">
                {" "}
                Shruti Singh
              </span>
            </span>
          </h1>

          <div className="grid gap-2 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-1">
              <p className="text-white">
                Data Science postgraduate and AI Tool Expert with hands-on experience in data cleaning, analysis, and visualization. I specialize in leveraging advanced AI technologies to streamline data workflows and drive intelligent automation.
              </p>
              <p className="text-white">
                Skilled in Python, SQL, Excel, and statistical analysis, I possess a strong ability to integrate AI-driven insights to support complex, data-driven decision-making and innovation.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner driven by a desire to turn raw data into actionable stories. My goal is to support continuous growth and optimization through precise, data-driven strategies.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Shruti Singh, Data Analyst
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator to Hero */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 z-10">
          <span className="text-gray-400 text-sm flex items-center gap-2">
            <i className="fas fa-mouse text-blue-400"></i>
            Scroll Down
          </span>
          <a href="#hero" className="text-blue-400 text-xl">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </section>
    </>
  );
}
