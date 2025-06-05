import BlurText from "@/components/animated/BlurText";
import ClickSpark from "@/components/animated/ClickSpark";
import Dock from "@/components/animated/Dock";
import RotatingText from "@/components/animated/RotatingText";
import SpotlightCard from "@/components/animated/SpotlightCard";
import Squares from "@/components/animated/SquareBg";
import Socials from "@/components/Socials";
import { Archive, Home, Settings, User } from "lucide-react";
import { useMemo } from "react";

export default function Page() {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <main className="bg-black relative min-h-screen z-10">
        <div className="absolute opacity-10 z-[0] inset-0">
          {useMemo(
            () => (
              <Squares
                speed={0.005}
                squareSize={40}
                direction="down"
                borderColor="#fff"
                hoverFillColor="#222"
              />
            ),
            []
          )}
        </div>
        <nav className="bg-white py-1 text-center font-bold absolute inset-x-0">
          ...Under Construction...
        </nav>
        <section className="max-b-w min-h-screen pt-20 pb-12 relative z-20 flex items-center justify-center">
          <div className="flex flex-col gap-6 items-center  rounded-3xl">
            <div className="flex flex-col sm:flex-row gap-4 px-8 sm:px-0 sm:gap-14">
              <div className="w-full">
                <BlurText
                  text="Obisike Treasure"
                  delay={150}
                  animateBy="words"
                  onAnimationComplete={() => {
                    console.log("Animation completed!");
                  }}
                  direction="top"
                  className="text-[5rem] leading-[4.2rem] uppercase font-medium text-gray-100"
                />
                <article className="flex  text-3xl font-extrabold gap-2 my-5">
                  <RotatingText
                    texts={["Frontend", "Backend", "Fullstack"]}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-orange-400 to-purple-500 text-black pt-0.5 overflow-hidden justify-center "
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.05}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                  <div className=" text-gray-300 flex items-center">
                    Developer
                  </div>
                </article>
                <Socials />
              </div>
              <div className=" ">
                <p className="text-gray-400 text-2xl mt-10">
                  With 5 years of experience crafting robust web applications
                  and scalable solutions. Passionate about building end-to-end
                  solutions that make a difference.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-b-w pb-32">
          <div className="flex sm:flex-row flex-col gap-4">
            <SpotlightCard className="w-full sm:w-1/3">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text">
                  Frontend Technologies
                </h2>

                <p className="text-lg text-gray-300">
                  Specialized in Vue.js and React development with TypeScript,
                  creating modern and responsive user interfaces with a focus on
                  performance and user experience.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard className="w-full sm:w-1/3">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text">
                  Backend Technologies
                </h2>

                <p className="text-lg text-gray-300">
                  Proficient in Laravel, PHP, Python, and Node.js with
                  Express.js, building robust and scalable server-side
                  applications and APIs.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard className="w-full sm:w-1/3">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text">
                  Full Stack Expertise
                </h2>

                <p className="text-lg text-gray-300">
                  End-to-end development capabilities, combining frontend and
                  backend technologies to deliver complete web solutions with
                  modern architecture patterns.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </section>
        <div className="fixed bottom-0 left-0 z-[1000] max-w-[100vw] right-0">
          <Dock
            items={[
              {
                icon: <Home size={18} className="text-gray-200" />,
                label: "Home",
                onClick: () => alert("Home!"),
              },
              {
                icon: <Archive size={18} className="text-gray-200" />,
                label: "Archive",
                onClick: () => alert("Archive!"),
              },
              {
                icon: <User size={18} className="text-gray-200" />,
                label: "Profile",
                onClick: () => alert("Profile!"),
              },
              {
                icon: <Settings size={18} className="text-gray-200" />,
                label: "Settings",
                onClick: () => alert("Settings!"),
              },
            ]}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </div>
      </main>
    </ClickSpark>
  );
}
