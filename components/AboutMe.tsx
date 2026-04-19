import React from "react";
import profileData from "@/lib/data/profile.json";

type SkillGroupProps = {
  label: string;
  items: string[];
  tone: string;
};

function SkillGroup({ label, items, tone }: SkillGroupProps) {
  return (
    <div className="border-t border-border/70 pt-5">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h3 className="tech-code text-xs font-semibold uppercase tracking-normal text-foreground">
          {label}
        </h3>
        <span className={`h-px flex-1 ${tone}`} />
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="tech-code rounded-md border border-border/70 bg-background/75 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AboutMe() {
  const {
    personal_information: personalInformation,
    summary,
    education,
    skills,
    experience,
    title,
  } = profileData;

  const currentRole = experience[0];
  const fullName = [
    personalInformation.first_name,
    personalInformation.middle_name,
    personalInformation.last_name,
  ]
    .filter(Boolean)
    .join(" ");

  const skillGroups = [
    {
      label: "Frontend",
      items: skills.frontend,
      tone: "bg-gradient-to-r from-green-400/70 to-cyan-400/70",
    },
    {
      label: "Backend",
      items: skills.backend,
      tone: "bg-gradient-to-r from-blue-400/70 to-violet-400/70",
    },
    {
      label: "Languages",
      items: skills.languages,
      tone: "bg-gradient-to-r from-orange-400/70 to-purple-400/70",
    },
    {
      label: "Data and Cloud",
      items: [...skills.databases, ...skills.devops],
      tone: "bg-gradient-to-r from-cyan-400/70 to-orange-400/70",
    },
  ];

  return (
    <section id="about" className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="tech-code mb-4 text-xs font-semibold uppercase tracking-normal text-muted-foreground">
              01 / About
            </p>
            <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Product-minded engineering with a full-stack command line.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {summary.professional}
            </p>
            <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
              I work across product interfaces, APIs, data stores, deployment
              systems, and technical writing, with a strong bias toward
              maintainable implementation and polished user experience.
            </p>
          </div>

          <div className="space-y-8">
            <div className="tech-panel rounded-lg border border-border/70 bg-background/80 p-6 backdrop-blur sm:p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="tech-code text-xs text-muted-foreground">
                    Name
                  </p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    {fullName}
                  </p>
                </div>
                <div>
                  <p className="tech-code text-xs text-muted-foreground">
                    Title
                  </p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    {title}
                  </p>
                </div>
                <div>
                  <p className="tech-code text-xs text-muted-foreground">
                    Based in
                  </p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    {personalInformation.address.city},{" "}
                    {personalInformation.address.country}
                  </p>
                </div>
                <div>
                  <p className="tech-code text-xs text-muted-foreground">
                    Current role
                  </p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    {currentRole.role}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {currentRole.company} / {currentRole.period}
                  </p>
                </div>
              </div>
            </div>

            <div className="tech-panel rounded-lg border border-border/70 bg-background/80 p-6 backdrop-blur sm:p-8">
              <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="tech-code text-xs font-semibold uppercase tracking-normal text-muted-foreground">
                    Education
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-semibold text-foreground">
                    {education.degree}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Graduated {education.graduation_date}
                </p>
              </div>
              <div className="rounded-md border border-border/70 bg-muted/35 p-4">
                <p className="font-medium text-foreground">
                  {education.institution}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {education.field_of_study}
                </p>
              </div>
            </div>

            <div id="stack" className="tech-panel scroll-mt-28 rounded-lg border border-border/70 bg-background/80 p-6 backdrop-blur sm:p-8">
              <div className="mb-8">
                <p className="tech-code text-xs font-semibold uppercase tracking-normal text-muted-foreground">
                  Stack
                </p>
                <h3 className="font-display mt-2 text-2xl font-semibold text-foreground">
                  Tools I use to ship full-stack work
                </h3>
              </div>
              <div className="space-y-7">
                {skillGroups.map((group) => (
                  <SkillGroup key={group.label} {...group} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
