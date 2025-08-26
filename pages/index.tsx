import Dock from "@/components/animated/Dock";
import Hero from "@/components/Hero";

import TopNav from "@/components/TopNav";
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/components/ui/shadcn-io/announcement";
import { DotPattern } from "@/components/ui/shadcn-io/dot-pattern";
import { Archive, Home, InfoIcon, Settings, User } from "lucide-react";
import { useMemo } from "react";

// <SpotlightCard className="w-full sm:w-1/3">
//               <div className="flex flex-col gap-4">
//                 <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text">
//                   Frontend Technologies
//                 </h2>

//                 <p className="text-lg text-gray-300">
//                   Specialized in Vue.js and React development with TypeScript,
//                   creating modern and responsive user interfaces with a focus on
//                   performance and user experience.
//                 </p>
//               </div>
//             </SpotlightCard>

export default function Page() {
  return (
    <main className="relative min-h-screen z-10">
      {useMemo(
        () => (
          <DotPattern
            className="absolute inset-0 text-neutral-400"
            width={20}
            height={20}
            glow={true}
          />
        ),
        []
      )}

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

      <div className="fixed bottom-0 left-0 z-[1000] max-w-[100vw] right-0">
        <Dock
          items={[
            {
              icon: <Home size={18} className="dark:text-gray-200" />,
              label: "Home",
              onClick: () => alert("Home!"),
            },
            {
              icon: <Archive size={18} className="dark:text-gray-200" />,
              label: "Archive",
              onClick: () => alert("Archive!"),
            },
            {
              icon: <User size={18} className="dark:text-gray-200" />,
              label: "Profile",
              onClick: () => alert("Profile!"),
            },
            {
              icon: <Settings size={18} className="dark:text-gray-200" />,
              label: "Settings",
              onClick: () => alert("Settings!"),
            },
          ]}
          spring={{
            mass: 0.1,
            stiffness: 140,
            damping: 10,
          }}
          panelHeight={60}
          baseItemSize={42}
          magnification={60}
        />
      </div>
    </main>
  );
}
