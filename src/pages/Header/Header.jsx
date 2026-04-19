import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
  FaChevronDown
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Scrollspy Logic
    const sectionIds = ["hero", "skills", "experience", "education", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Adjust these margins to control when a section becomes 'active'
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveLink(id === "hero" ? "home" : id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/#hero" },
    {
      id: "skills",
      icon: FaCode,
      text: "Skills",
      path: "/#skills",
      subMenu: [
        { name: "Technical", id: "technical-skills" },
        { name: "ML", id: "machine-learning" },
        { name: "Data Visualization", id: "visualization-tools" },
        { name: "AI Tools", id: "ai-tool-expertise" },
        { name: "Web Tech", id: "web-technologies" }
      ]
    },
    {
      id: "experience",
      icon: FaBriefcase,
      text: "Experience",
      path: "/#experience",
    },
    {
      id: "education",
      icon: FaGraduationCap,
      text: "Education",
      path: "/#education",
    },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/#projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/#contact" },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">
          <nav className="bg-gray-900/90 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5">
            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center md:hidden px-2">
              <Link to="/" className="text-white font-bold">Portfolio</Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                <FaBars />
              </button>
            </div>

            {/* Navigation Links */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
                {navLinks.map(({ id, icon: Icon, text, path, subMenu }) => (
                  <div
                    key={id}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={path}
                      onClick={(e) => {
                        const hash = path.split('#')[1];
                        if (hash) {
                          const element = document.getElementById(hash);
                          if (element) {
                            e.preventDefault();
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                        setActiveLink(id);
                        setIsMenuOpen(false);
                      }}
                      className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                        transition-all duration-300 flex items-center gap-2
                        hover:bg-white/10 
                        ${activeLink === id
                          ? "bg-white/15 text-white"
                          : "text-gray-300 hover:text-white"
                        }
                      `}
                    >
                      <Icon
                        className={`text-base ${activeLink === id ? "scale-110" : ""
                          }`}
                      />
                      <span className="inline">{text}</span>
                      {subMenu && (
                        <FaChevronDown className={`text-[10px] transition-transform duration-300 ${activeDropdown === id ? 'rotate-180' : ''}`} />
                      )}
                    </Link>

                    {/* Submenu Dropdown */}
                    {subMenu && (
                      <div className={`
                        md:absolute md:top-full md:left-0 md:mt-2 md:w-48
                        bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden
                        transition-all duration-300 transform origin-top
                        ${activeDropdown === id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                        ${isMenuOpen ? 'block' : 'hidden md:block'}
                      `}>
                        <div className="py-2">
                          {subMenu.map((subItem) => (
                            <Link
                              key={subItem.id}
                              to={`/#${subItem.id}`}
                              onClick={(e) => {
                                const element = document.getElementById(subItem.id);
                                if (element) {
                                  e.preventDefault();
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                                setActiveLink('skills');
                                setIsMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                              className="block px-4 py-2 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}
