"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  BadgeCheck,
  Bot,
  Braces,
  Database,
  Gamepad2,
  Rocket,
  ServerCog,
  Trophy,
} from "lucide-react";
import profileData from "@/lib/data/profile.json";

type Quest = {
  id: string;
  label: string;
  description: string;
  target: string;
  xp: number;
  icon: React.ReactNode;
};

const quests: Quest[] = [
  {
    id: "about",
    label: "Scan profile",
    description: "Read the quick identity card and background.",
    target: "about",
    xp: 120,
    icon: <BadgeCheck size={18} />,
  },
  {
    id: "stack",
    label: "Inspect loadout",
    description: "Open the active frontend, backend, data, and cloud stack.",
    target: "stack",
    xp: 180,
    icon: <Braces size={18} />,
  },
  {
    id: "experience",
    label: "Review missions",
    description: "Walk through recent product and platform work.",
    target: "experience",
    xp: 260,
    icon: <ServerCog size={18} />,
  },
  {
    id: "projects",
    label: "Open artifacts",
    description: "Browse shipped products, open-source utilities, and links.",
    target: "projects",
    xp: 240,
    icon: <Rocket size={18} />,
  },
];

const badges = [
  { label: "API Builder", icon: <ServerCog size={16} /> },
  { label: "UI Crafter", icon: <Gamepad2 size={16} /> },
  { label: "Data Handler", icon: <Database size={16} /> },
  { label: "AI Curious", icon: <Bot size={16} /> },
];

export default function QuestHub() {
  const [completed, setCompleted] = useState<string[]>([]);
  const { personal_information: personalInformation, experience } =
    profileData;

  const earnedXp = useMemo(
    () =>
      quests.reduce(
        (total, quest) => total + (completed.includes(quest.id) ? quest.xp : 0),
        0
      ),
    [completed]
  );
  const totalXp = quests.reduce((total, quest) => total + quest.xp, 0);
  const progress = Math.round((earnedXp / totalXp) * 100);

  const handleQuestClick = (quest: Quest) => {
    setCompleted((current) =>
      current.includes(quest.id) ? current : [...current, quest.id]
    );
    document.getElementById(quest.target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="quests" className="relative px-6 py-16 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-6 md:grid-cols-[1fr_18rem] md:items-end">
          <div>
            <p className="tech-code mb-4 text-xs font-semibold uppercase tracking-normal text-muted-foreground">
              00 / Quest Hub
            </p>
            <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Explore the build like a mission map.
            </h2>
          </div>
          <div className="tech-panel rounded-lg border border-border/70 bg-background/85 p-4 backdrop-blur">
            <div className="mb-3 flex items-center justify-between gap-4">
              <span className="tech-code text-xs font-semibold text-muted-foreground">
                XP Progress
              </span>
              <span className="tech-code text-xs text-foreground">
                {earnedXp}/{totalXp}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-md bg-muted">
              <div
                className="h-full rounded-md bg-gradient-to-r from-cyan-400 via-green-400 to-orange-400 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid items-start gap-5 lg:grid-cols-[0.68fr_1.32fr]">
          <div className="tech-panel overflow-hidden rounded-lg border border-border/70 bg-background/85 backdrop-blur">
            <div className="grid gap-0 sm:grid-cols-[150px_1fr] lg:grid-cols-1">
              <div className="relative h-44 overflow-hidden border-b border-border/70 sm:h-auto sm:min-h-44 sm:border-b-0 sm:border-r lg:h-48 lg:min-h-0 lg:border-b lg:border-r-0">
                <Image
                  src="https://github.com/otrex.png?size=400"
                  alt={`${personalInformation.first_name} ${personalInformation.last_name}`}
                  fill
                  sizes="(min-width: 1024px) 320px, 150px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-md border border-white/25 bg-black/60 px-3 py-1 text-white backdrop-blur">
                  <span className="tech-code text-xs">player: otrex</span>
                </div>
              </div>
              <div className="p-5">
                <p className="tech-code text-xs uppercase tracking-normal text-muted-foreground">
                  Current campaign
                </p>
                <h3 className="font-display mt-2 text-xl font-semibold text-foreground">
                  {experience[0].role}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {experience[0].company} / {experience[0].period}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-md border border-border/70 bg-muted/30 p-3">
                    <p className="tech-code text-[11px] text-muted-foreground">
                      quests
                    </p>
                    <p className="mt-1 text-xl font-semibold text-foreground">
                      {completed.length}/{quests.length}
                    </p>
                  </div>
                  <div className="rounded-md border border-border/70 bg-muted/30 p-3">
                    <p className="tech-code text-[11px] text-muted-foreground">
                      level
                    </p>
                    <p className="mt-1 text-xl font-semibold text-foreground">
                      {Math.max(1, Math.ceil(progress / 25))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="tech-panel rounded-lg border border-border/70 bg-background/85 p-6 backdrop-blur">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Active quests
                </h3>
                <Trophy className="text-muted-foreground" size={22} />
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {quests.map((quest) => {
                  const isCompleted = completed.includes(quest.id);
                  return (
                    <button
                      key={quest.id}
                      type="button"
                      onClick={() => handleQuestClick(quest)}
                      className="group rounded-lg border border-border/70 bg-muted/25 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:bg-background"
                    >
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <span className="rounded-md border border-border/70 bg-background p-2 text-foreground">
                          {quest.icon}
                        </span>
                        <span className="tech-code rounded-md border border-border/70 bg-background px-2 py-1 text-[11px] text-muted-foreground">
                          +{quest.xp} XP
                        </span>
                      </div>
                      <h4 className="font-semibold text-foreground">
                        {quest.label}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {quest.description}
                      </p>
                      <p className="tech-code mt-4 text-[11px] font-semibold text-foreground">
                        {isCompleted ? "complete" : "launch quest"}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[1fr_1.25fr]">
              <div className="tech-panel rounded-lg border border-border/70 bg-background/85 p-6 backdrop-blur">
                <p className="tech-code mb-4 text-xs font-semibold uppercase tracking-normal text-muted-foreground">
                  Achievement badges
                </p>
                <div className="grid gap-3">
                  {badges.map((badge) => (
                    <div
                      key={badge.label}
                      className="flex items-center gap-3 rounded-md border border-border/70 bg-muted/30 p-3"
                    >
                      <span className="rounded-md border border-border/70 bg-background p-2 text-foreground">
                        {badge.icon}
                      </span>
                      <span className="tech-code text-xs font-semibold text-foreground">
                        {badge.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tech-panel rounded-lg border border-border/70 bg-background/85 p-6 backdrop-blur">
                <p className="tech-code mb-4 text-xs font-semibold uppercase tracking-normal text-muted-foreground">
                  Loadout image
                </p>
                <div className="rounded-md border border-border/70 bg-muted/30 p-4">
                  <Image
                    src="https://skillicons.dev/icons?i=ts,react,nextjs,vue,laravel,nodejs,python,docker,postgres,aws"
                    alt="Technology stack icons"
                    width={520}
                    height={96}
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  A compact visual loadout for the stack used across product
                  interfaces, APIs, cloud deployments, and data systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
