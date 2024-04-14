import { AboutMeSection } from "@/components/sections/AboutMeSection";
import { ContactMeSection } from "@/components/sections/ContactMeSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 p-8 max-w-[800px]">
      <AboutMeSection />
      <ProjectsSection />
      <ContactMeSection />
    </main>
  );
}
