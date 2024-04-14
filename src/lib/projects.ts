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
    period: "02/2024-03/2023",
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
    name: "Fast Meals (discontinued)",
    description:
      "Fast Meals is a platform for restaurant owners to manage their restaurant, incoming orders and employers. It enables clients to easily order and follow their meals.",
    period: "01/2024-02/2023",
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
    websiteLink: "https://fast-mealz.vercel.app/nl",
    sourceLink: "https://github.com/Talha-Bayansar/fast-meals",
  },
  {
    name: "Selam",
    description:
      "Selam simplifies organization management by allowing you to create and manage groups within your organization. Add members, organize them into groups, and effortlessly keep an organized record of attendance at events and activities. Stay connected, coordinate events, and build a closer-knit community.",
    period: "11/2023-12/2023",
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
    websiteLink: "https://selam-app.vercel.app/",
    sourceLink: "https://github.com/Talha-Bayansar/selam-app",
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
