export type Project = {
  name: string;
  description: string;
  period: string;
  technologies: string[];
  imageUrl?: string;
  websiteLink?: string;
  sourceLink?: string;
};

export const projects: Project[] = [
  {
    name: "Vlaams mensenrechteninstituut",
    description:
      "A project I worked on at Ordina for the Flemish government. The Vlaams mensenrechteninstituut (VMRI) works for equal opportunities for all citizens and raises awareness of human rights among policymakers and the public.",
    period: "02/2023-03/2023",
    technologies: [
      "Gatsby",
      "React",
      "Typescript",
      "Drupal (headless CMS)",
      "GraphQL",
      "Azure DevOps",
    ],
    websiteLink: "https://www.vlaamsmensenrechteninstituut.be",
  },
  {
    name: "Barometer Samenleven",
    description:
      "A project I worked on at Ordina for the Flemish government. The Barometer Samenleven is a dashboard that depicts eight objectives of living together in diversity. For each objective, it shows the direction in which the situation is evolving.",
    period: "04/2022-05/2022",
    technologies: [
      "Gatsby",
      "React",
      "Typescript",
      "Drupal (headless CMS)",
      "GraphQL",
      "Azure DevOps",
    ],
    websiteLink: "https://www.barometersamenleven.be",
  },
];
