"use client";
import { useState } from "react";
import { scrollTo } from "@/utils";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("AboutSection");

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    scrollTo(section);
  };

  const sections = [
    { name: "AboutSection", label: "ABOUT" },
    { name: "ExperienceSection", label: "EXPERIENCE" },
    { name: "ProjectsSection", label: "PROJECTS" },
  ];

  return (
    <nav className="hidden lg:block">
      <ul className="mt-16 w-max">
        {sections.map((section) => (
          <li key={section.name}>
            <a
              onClick={() => handleNavClick(section.name)}
              className={`group flex items-center py-3 ${
                activeSection === section.name ? "active" : ""
              }`}
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                {section.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
