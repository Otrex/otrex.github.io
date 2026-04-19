import AboutMe from "@/components/AboutMe";
import Dock from "@/components/animated/Dock";
import Hero from "@/components/Hero";

import QuestHub from "@/components/QuestHub";
import TopNav from "@/components/TopNav";
import WorkShowcase from "@/components/WorkShowcase";
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/components/ui/shadcn-io/announcement";
import {
  Archive,
  Briefcase,
  Code2,
  Gamepad2,
  Home,
  InfoIcon,
  User,
} from "lucide-react";

export default function Page() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden z-10">
      <div aria-hidden="true" className="portfolio-grid-bg" />
      <div aria-hidden="true" className="portfolio-sweep-bg" />

      <div className="fixed top-12 left-1/2 -translate-x-1/2 z-50">
        <Announcement>
          <AnnouncementTag>Latest update</AnnouncementTag>
          <AnnouncementTitle>
            Still in the works...
            <InfoIcon className="shrink-0 text-muted-foreground" size={16} />
          </AnnouncementTitle>
        </Announcement>
      </div>

      <TopNav />

      <Hero />
      <QuestHub />
      <AboutMe />
      <WorkShowcase />

      <div className="fixed bottom-0 left-0 z-[1000] max-w-[100vw] right-0">
        <Dock
          items={[
            {
              icon: <Home size={18} className="dark:text-gray-200" />,
              label: "Home",
              onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
            },
            {
              icon: <Gamepad2 size={18} className="dark:text-gray-200" />,
              label: "Quests",
              onClick: () => scrollToSection("quests"),
            },
            {
              icon: <User size={18} className="dark:text-gray-200" />,
              label: "About",
              onClick: () => scrollToSection("about"),
            },
            {
              icon: <Briefcase size={18} className="dark:text-gray-200" />,
              label: "Work",
              onClick: () => scrollToSection("experience"),
            },
            {
              icon: <Code2 size={18} className="dark:text-gray-200" />,
              label: "Projects",
              onClick: () => scrollToSection("projects"),
            },
            {
              icon: <Archive size={18} className="dark:text-gray-200" />,
              label: "Data",
              onClick: () => {
                window.location.href = "/json";
              },
            },
          ]}
          spring={{
            mass: 0.1,
            stiffness: 140,
            damping: 10,
          }}
          panelHeight={60}
          baseItemSize={38}
          magnification={54}
        />
      </div>
    </main>
  );
}
