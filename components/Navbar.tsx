"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { name: "About", link: "#about", id: "about" },
    { name: "Education", link: "#education", id: "education" },
    { name: "Research", link: "#research", id: "research" },
    { name: "IEEE Roles", link: "#reviewer", id: "reviewer" },
    { name: "Internships", link: "#internships", id: "internships" },
    { name: "Projects", link: "#projects", id: "projects" },
    { name: "Skills", link: "#skills", id: "skills" },
    { name: "Achievements", link: "#achievements", id: "achievements" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "education",
        "research",
        "reviewer",
        "internships",
        "projects",
        "skills",
        "achievements",
      ];

      let currentSection = "about";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-3">

        <div className="relative flex items-center justify-between rounded-full border border-cyan-500/10 bg-black/40 backdrop-blur-3xl px-6 py-3 overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.08)]">

          {/* Animated Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />

          {/* Logo Section */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 flex items-center gap-3 shrink-0"
          >
            <Image
              src="/logo.png"
              alt="Gowtham K Logo"
              width={48}
              height={48}
              priority
              className="object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
            />

            <div className="hidden md:flex flex-col">
              <h1 className="text-xl font-black whitespace-nowrap bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Gowtham K
              </h1>

              <p className="text-xs text-gray-400 whitespace-nowrap">
                Professional Portfolio
              </p>
            </div>
          </motion.a>

          {/* Navigation */}
          <div className="hidden lg:flex items-center gap-1 relative z-10">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.link}
                whileHover={{
                  y: -2,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className={`relative overflow-hidden rounded-full px-3 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full border border-cyan-400/20 bg-cyan-500/10 shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {item.name}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(34,211,238,0.4)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="relative z-10 hidden lg:flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 whitespace-nowrap"
          >
            Download Resume
          </motion.a>

        </div>

      </div>
    </motion.nav>
  );
}