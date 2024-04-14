import React from "react";
import { Section } from "../layout/Section";

export const AboutMeSection = () => {
  return (
    <Section
      id="about-me"
      title="Hi, I'm Talha Bayansar 👋"
      className="flex flex-col gap-2 text-sm md:text-base"
    >
      <p>
        I&apos;m a frontend developer with a strong focus on creating elegant
        and efficient user interfaces. I have a deep appreciation for React and
        its ecosystem, and I specialize in leveraging technologies like Next.js
        for robust full-stack development.
      </p>
      <p>
        When I&apos;m not coding, you can find me on the football field ⚽️,
        enjoying the beautiful game, or spending quality time with my family.
        I&apos;m happily married, 23 years old, and proud to call 🇧🇪 Belgium my
        home, with 🇹🇷 Turkish heritage shaping my cultural background.
      </p>
      <p>
        I&apos;m passionate about continuous learning and growth, both
        personally and professionally 📚, and I&apos;m always excited to tackle
        new challenges and contribute positively to projects and teams.
      </p>
    </Section>
  );
};
