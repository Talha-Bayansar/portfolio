import React from "react";
import { Section } from "../layout/Section";
import { projects } from "@/lib/projects";
import { ProjectCard } from "../ProjectCard";

type Props = {};

export const ProjectsSection = (props: Props) => {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <li key={project.name} className="h-full">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
};
