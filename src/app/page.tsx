import { AboutMeSection } from "@/components/sections/AboutMeSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <ScrollArea>
      <main className="flex flex-col gap-4 p-8 max-w-[800px]">
        <AboutMeSection />
        <ProjectsSection />
      </main>
    </ScrollArea>
  );
}
