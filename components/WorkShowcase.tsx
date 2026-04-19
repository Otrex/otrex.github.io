import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Package } from "lucide-react";
import profileData from "@/lib/data/profile.json";

const projectImages = [
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    alt: "Analytics dashboard screens",
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    alt: "Laptop running product software",
  },
  {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    alt: "Digital payment workflow",
  },
];

function StackList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.slice(0, 7).map((item) => (
        <span
          key={item}
          className="tech-code rounded-md border border-border/70 bg-muted/35 px-2.5 py-1 text-[11px] text-muted-foreground"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function WorkShowcase() {
  const { experience, projects, open_source: openSource } = profileData;
  const featuredExperience = experience.slice(0, 4);
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <section id="experience" className="relative px-6 py-24 scroll-mt-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-5 md:grid-cols-[0.7fr_1fr] md:items-end">
            <div>
              <p className="tech-code mb-4 text-xs font-semibold uppercase tracking-normal text-muted-foreground">
                02 / Work
              </p>
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Systems shipped across product teams, APIs, and cloud.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:justify-self-end">
              A snapshot of recent roles, the stack behind them, and the
              delivery work that connects frontend polish with backend
              reliability.
            </p>
          </div>

          <div className="relative">
            <div className="space-y-6">
              {featuredExperience.map((role, index) => (
                <div
                  key={`${role.company}-${role.period}`}
                  className="relative grid gap-4 md:grid-cols-[10rem_1.5rem_1fr]"
                >
                  <div className="tech-code pt-1 text-xs uppercase tracking-normal text-muted-foreground md:text-right">
                    {role.period}
                  </div>

                  <div className="relative hidden justify-center md:flex">
                    <div
                      aria-hidden="true"
                      className="absolute top-0 h-full w-px bg-border"
                    />
                    {index < featuredExperience.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="absolute left-1/2 top-6 h-[calc(100%+1.5rem)] w-px -translate-x-1/2 bg-border"
                      />
                    )}
                    <div className="relative z-10 mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-foreground/30 bg-background shadow-sm">
                      <span className="h-2.5 w-2.5 rounded-full bg-foreground" />
                    </div>
                  </div>

                  <article className="tech-panel rounded-lg border border-border/70 bg-background/85 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="tech-code text-xs uppercase tracking-normal text-muted-foreground md:hidden">
                          {role.period}
                        </p>
                        <h3 className="font-display mt-1 text-2xl font-semibold text-foreground md:mt-0">
                          {role.company}
                        </h3>
                        <p className="mt-1 text-muted-foreground">
                          {role.role} / {role.location}
                        </p>
                      </div>
                      <span className="tech-code w-fit rounded-md border border-border/70 bg-muted/35 px-3 py-1 text-xs text-muted-foreground">
                        {role.highlights.length} delivery notes
                      </span>
                    </div>
                    <StackList items={role.stack} />
                    <ul className="mt-6 grid gap-3 md:grid-cols-2">
                      {role.highlights.slice(0, 4).map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm leading-6 text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative px-6 py-24 scroll-mt-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="tech-code mb-4 text-xs font-semibold uppercase tracking-normal text-muted-foreground">
                03 / Projects
              </p>
              <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Product builds with real operational edges.
              </h2>
            </div>
            <Link
              href="/json"
              className="tech-code w-fit rounded-md border border-border/70 bg-background/85 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-foreground/40 hover:bg-muted"
            >
              View data route
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <article
                key={project.name}
                className="tech-panel flex min-h-full flex-col overflow-hidden rounded-lg border border-border/70 bg-background/85 backdrop-blur transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-40 border-b border-border/70">
                  <Image
                    src={projectImages[index]?.src ?? projectImages[0].src}
                    alt={projectImages[index]?.alt ?? project.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="tech-code text-xs uppercase tracking-normal text-muted-foreground">
                        {project.role}
                      </p>
                      <h3 className="font-display mt-3 text-2xl font-semibold text-foreground">
                        {project.name}
                      </h3>
                    </div>
                    <span className="rounded-md border border-border/70 bg-muted/35 p-2 text-foreground">
                      <Package size={18} />
                    </span>
                  </div>
                  <StackList items={project.stack} />
                  <ul className="mt-6 flex flex-1 flex-col gap-3">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-code mt-7 inline-flex items-center gap-2 text-xs font-semibold text-foreground underline-offset-4 hover:underline"
                  >
                    Open project
                    <ExternalLink size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="tech-panel mt-5 rounded-lg border border-border/70 bg-background/85 p-6 backdrop-blur">
            <p className="tech-code mb-4 text-xs font-semibold uppercase tracking-normal text-muted-foreground">
              Open source
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {openSource.map((item) => (
                <div
                  key={item.name}
                  className="rounded-md border border-border/70 bg-muted/30 p-4"
                >
                  <h3 className="tech-code text-sm font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
