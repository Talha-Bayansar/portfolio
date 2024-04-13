import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Project } from "@/lib/projects";
import { Button } from "./ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.period}</CardDescription>
        <ul className="flex flex-wrap gap-1">
          {project.technologies.map((technology) => (
            <li key={technology}>
              <Badge>{technology}</Badge>
            </li>
          ))}
        </ul>
      </CardHeader>
      <CardContent>{project.description}</CardContent>
      <CardFooter>
        {project.sourceLink && (
          <Button asChild>
            <Link target="_blank" href={project.sourceLink}>
              Source
            </Link>
          </Button>
        )}
        {project.websiteLink && (
          <Button asChild>
            <Link target="_blank" href={project.websiteLink}>
              Website
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
