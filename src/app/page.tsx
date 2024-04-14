import { AboutMeSection } from "@/components/sections/AboutMeSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-8 max-w-[800px]">
      <AboutMeSection />
      <ProjectsSection />
    </main>
  );
}
