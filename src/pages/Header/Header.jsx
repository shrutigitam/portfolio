import React, { useState, useEffect, useRef } from "react";
import { 
  Home, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Layout, 
  Mail,
  Menu,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Scrollspy Logic
    const sectionIds = ["hero", "skills", "experience", "education", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
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

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "home", icon: Home, text: "Home", path: "/#hero" },
    { id: "skills", icon: Cpu, text: "Skills", path: "/#skills" },
    { id: "experience", icon: Briefcase, text: "Experience", path: "/#experience" },
    { id: "education", icon: GraduationCap, text: "Education", path: "/#education" },
    { id: "projects", icon: Layout, text: "Projects", path: "/#projects" },
    { id: "contact", icon: Mail, text: "Contact", path: "/#contact" },
  ];

  // Update indicator position
  useEffect(() => {
    const activeElement = document.getElementById(`nav-${activeLink}`);
    if (activeElement && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const rect = activeElement.getBoundingClientRect();
      setIndicatorStyle({
        left: rect.left - navRect.left,
        width: rect.width,
        opacity: 1
      });
    }
  }, [activeLink, isMenuOpen]);

  const handleLinkClick = (e, path, id) => {
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
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 pt-6 ${
        scrolled ? "md:pt-4" : "md:pt-8"
      }`}
    >
      <div className="max-w-5xl mx-auto flex justify-center">
        {/* Main Dock Container */}
        <div 
          className={`relative flex items-center p-1.5 rounded-2xl md:rounded-full transition-all duration-500 border border-white/10
            ${scrolled 
              ? "bg-gray-900/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]" 
              : "bg-gray-900/20 backdrop-blur-md"
            }`}
        >
          {/* Mobile Bar */}
          <div className="flex items-center justify-between w-full md:w-auto px-4 md:px-0">
            <Link 
              to="/" 
              className="md:hidden text-white font-bold tracking-tight text-lg mr-8"
            >
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">S.</span>
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Desktop Nav Contents */}
          <nav 
            ref={navRef}
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center gap-1 relative z-10 w-full md:w-auto mt-4 md:mt-0`}
          >
            {/* Sliding Indicator (Desktop only) */}
            <div 
              className="absolute h-full top-0 bg-white/10 md:bg-white/15 backdrop-blur-md rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hidden md:block"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity,
              }}
            />

            {navLinks.map(({ id, icon: Icon, text, path }) => (
              <Link
                key={id}
                id={`nav-${id}`}
                to={path}
                onClick={(e) => handleLinkClick(e, path, id)}
                className={`relative z-20 px-4 py-2 md:py-1.5 text-sm font-medium transition-all duration-300 flex items-center gap-2.5 rounded-full
                  ${activeLink === id 
                    ? "text-white" 
                    : "text-gray-400 hover:text-white hover:bg-white/5 md:hover:bg-transparent"
                  }
                `}
              >
                <Icon 
                  size={18} 
                  strokeWidth={activeLink === id ? 2.5 : 2}
                  className={`transition-all duration-300 ${
                    activeLink === id 
                      ? "scale-110 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" 
                      : "scale-100 opacity-60 group-hover:opacity-100"
                  }`} 
                />
                <span className="relative">{text}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes float-dock {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        
        header > div {
          animation: float-dock 6s ease-in-out infinite;
        }

        /* Active Indicator Glow */
        .indicator-glow {
          position: absolute;
          bottom: -2px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #34d399, #60a5fa, transparent);
          transition: all 0.5s ease;
        }
      `}</style>
    </header>
  );
}
