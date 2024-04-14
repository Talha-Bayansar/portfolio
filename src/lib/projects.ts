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
    name: "MyBarber",
    description:
      "MyBarber The application streamlines barbershop operations and appointment booking, promoting equal access and efficiency. It empowers owners to manage seamlessly while enabling clients to easily discover, schedule, and pay for appointments, fostering accessibility in the industry.",
    period: "01/2024-03/2023",
    technologies: [
      "NextJS",
      "React",
      "Typescript",
      "tRPC",
      "Xata",
      "Vercel",
      "NextAuth",
      "Shadcn",
    ],
    websiteLink: "https://myberber.vercel.app/en",
    sourceLink: "https://github.com/Talha-Bayansar/mybarber",
  },
  {
    name: "Vlaams mensenrechteninstituut",
    description:
      "The Vlaams mensenrechteninstituut (VMRI) works for equal opportunities for all citizens and raises awareness of human rights among policymakers and the public.",
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
      "The Barometer Samenleven is a dashboard that depicts eight objectives of living together in diversity. For each objective, it shows the direction in which the situation is evolving.",
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
