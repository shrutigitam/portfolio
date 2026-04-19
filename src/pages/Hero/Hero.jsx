import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import IconCloud from "@/components/ui/icon-cloud";

// Grid Background - Replacing the HexagonBackground
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
            id="grid"
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
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function Hero() {
  const words = [
    "AI Tool Expert & Data Analyst",
    "Data Science Postgraduate",
    "Turning data into actionable insights",
    "Python, SQL & AI Solutions",
    "Solving real-world business problems",
  ];

  const [code] = useState(`
const profile = {
    name: 'Shruti Singh',
    title: 'AI Tool Expert | Data Science Postgraduate',
    skills: [
        'Python', 'Machine Learning', 'AI Tools',
        'SQL', 'Tableau', 'Power BI', 'Excel'
    ],
    hardWorker: true,
    aiExpert: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5
        );
    }
};
  `);

  useEffect(() => {
    Prism.highlightAll();

    // Add CSS animation for grid and dots
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      
      @keyframes dotPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      
      .animate-float-slow {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-float-delayed {
        animation: float 6s ease-in-out infinite;
        animation-delay: 3s;
      }
      
      /* Media query for 1366x768 resolution */
      @media screen and (width: 1366px) and (height: 768px), 
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .hero {
          padding-top: 12rem !important;
        }
        .hero .container {
          padding-top: 10rem !important;
          margin-top: 5rem !important;
        }
        .hero-section-padding {
          padding-top: 12rem !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Apply extra padding for 1366x768 resolution
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty(
          "--hero-padding-top",
          "12rem"
        );
      } else {
        document.documentElement.style.setProperty("--hero-padding-top", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, [code]);

  return (
    <>
      <main className="bg-[#020617] text-white min-h-screen">
        <PortfolioPage />
        <section
          id="hero"
          className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding"
          style={{ paddingTop: "var(--hero-padding-top, 0)" }}
        >
          <div className="absolute inset-0"></div>

          {/* Choose one of these background options */}
          <GridBackground />

          {/* Or keep the original backgrounds if you prefer */}
          {/* <HexagonBackground /> */}
          {/* <AnimatedGrid /> */}
          {/* <DotBackground /> */}

          {/* Meteors Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          {/* Main content container */}
          <div
            className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28"
            style={{
              paddingTop:
                window.innerWidth >= 1360 &&
                  window.innerWidth <= 1370 &&
                  window.innerHeight >= 760 &&
                  window.innerHeight <= 775
                  ? "12rem"
                  : "",
            }}
          >
            {/* Left column - Interactive Icon Cloud */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInDown relative flex items-center justify-center order-1 lg:order-1">
              {/* Ambient Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                <IconCloud iconSlugs={[
                  "python",
                  "pandas",
                  "numpy",
                  "scikit-learn",
                  "tensorflow",
                  "pytorch",
                  "keras",
                  "jupyter",
                  "openai",
                  "googlegemini",
                  "anthropic",
                  "huggingface",
                  "perplexity",
                  "stabilityai",
                  "mistralai",
                  "tableau",
                  "power-bi",
                  "postgresql",
                  "plotly",
                  "amazon-s3",
                  "google-cloud",
                  "git",
                  "github"
                ]} />

                {/* Floating badges for extra visual interest */}
                <div className="absolute top-0 right-0 sm:-top-4 sm:-right-4 bg-gray-900/80 backdrop-blur-md border border-blue-500/30 p-3 sm:p-4 rounded-2xl shadow-2xl animate-float-slow hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <i className="fas fa-brain text-blue-400 text-sm sm:text-base"></i>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-400">Expertise</p>
                      <p className="text-xs sm:text-sm font-bold">AI Solutions</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 sm:-bottom-8 sm:-left-8 bg-gray-900/80 backdrop-blur-md border border-teal-500/30 p-3 sm:p-4 rounded-2xl shadow-2xl animate-float-delayed hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                      <i className="fas fa-chart-line text-teal-400 text-sm sm:text-base"></i>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-400">Strategy</p>
                      <p className="text-xs sm:text-sm font-bold">Data Insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Text content */}
            <div className="w-full lg:w-1/2 animate__animated animate__fadeInUp animate__delay-0.5s relative order-2 lg:order-2">
              {/* Decorative blurs */}
              <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

              {/* Name section */}
              <div className="relative mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Data Analyst
                  <span className="relative inline-block">

                    <span className="typing-effect gradient-text">
                      {" "}
                      AI Tool Expert, Innovator
                    </span>
                  </span>
                </h1>
                <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              </div>

              {/* Role badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
                <i className="fas fa-rocket text-blue-400 animate-bounce text-sm sm:text-base"></i>
                <span>
                  <FlipWords
                    className={"text-lg sm:text-xl text-blue-400 font-medium"}
                    words={words}
                  />
                </span>
              </div>

              {/* Description */}
              <div className="relative mb-3 sm:mb-3 max-w-xl">
                <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed">
                  Turning data into actionable insights to solve real-world business problems. 📊✨
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s">
                {/* View Projects Button */}
                <a
                  href="https://github.com/shrutigitam"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                    <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                      <span>Learn More</span>
                      <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"></i>
                    </span>
                  </span>
                </a>

                {/* Contact Button */}
                <a
                  href="/shruti_resume.pdf"
                  download="Shruti_Singh_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                    <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
                      <span>Get Resume</span>
                      <i className="fas fa-envelope transform transition-all duration-300 group-hover:rotate-12"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
