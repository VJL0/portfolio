"use client";

import { GitHubProject } from "@/types";
import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";

// Function to fetch starred projects from GitHub
async function getStarredProjects() {
  try {
    const response = await fetch("https://api.github.com/users/vjl0/starred");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<GitHubProject[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getStarredProjects();
      setProjects(data);
    }
    fetchData();
  }, []);

  return (
    <section
      id="ProjectsSection"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      Projects Section
      <ul>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.name}
            description={project.description}
            link={project.html_url}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
