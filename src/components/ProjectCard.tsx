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
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { CodeXml, Globe } from "lucide-react";

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <Card className="h-full flex flex-col">
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
      <CardContent className="flex-grow">
        {/* <Accordion type="single" collapsible>
          <AccordionItem value={project.name}>
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent>{project.description}</AccordionContent>
          </AccordionItem>
        </Accordion> */}
        {project.description}
      </CardContent>
      <CardFooter className="gap-2">
        {project.sourceLink && (
          <Button asChild>
            <Link
              target="_blank"
              className="flex gap-2"
              href={project.sourceLink}
            >
              <span>Source</span>
              <CodeXml />
            </Link>
          </Button>
        )}
        {project.websiteLink && (
          <Button asChild>
            <Link
              target="_blank"
              className="flex gap-2"
              href={project.websiteLink}
            >
              <span>Website</span>
              <Globe />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
