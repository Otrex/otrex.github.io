"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { AppleHelloEnglishEffect } from "./ui/shadcn-io/apple-hello-effect";
import { TypingText } from "./ui/shadcn-io/typing-text";
import { RippleButton } from "./ui/shadcn-io/ripple-button";

const focusStack = ["Next.js", "Vue", "Laravel", "TypeScript", "Docker"];
const stats = [
  { label: "years shipping", value: "5+" },
  { label: "core stack", value: "Full-stack" },
  { label: "mode", value: "Product-led" },
];

export default function Hero() {
  const scrollToWork = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      aria-label="hero"
      className="relative flex min-h-screen w-full items-center overflow-x-hidden px-6 pb-24 pt-32"
    >
      <div aria-hidden="true" className="hero-orbit" />
      <Image
        src="https://github.com/otrex.png?size=520"
        alt=""
        width={520}
        height={520}
        priority
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover opacity-[0.06] grayscale [mask-image:radial-gradient(circle,black_28%,transparent_68%)] dark:opacity-[0.09] md:block"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        <div className="tech-code mb-7 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2 rounded-md border border-border/70 bg-background/80 px-3 py-1.5 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            status: available
          </span>
          <span className="rounded-md border border-border/70 bg-background/80 px-3 py-1.5 shadow-sm backdrop-blur">
            build: frontend + backend + cloud
          </span>
        </div>

        <div className="mb-5 flex items-center gap-3 text-muted-foreground">
          <AppleHelloEnglishEffect speed={0.65} className="h-10 w-32" />
          <span className="hidden h-px w-16 bg-border sm:block" />
          <span className="tech-code hidden text-xs uppercase tracking-normal sm:inline">
            Obisike Treasure
          </span>
        </div>

        <h1 className="font-display max-w-4xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          I build full-stack products that feel fast, scale cleanly, and read
          like the work of someone who ships.
        </h1>

        <div className="mt-7 min-h-8 text-lg text-muted-foreground sm:text-xl">
          <TypingText
            className="neg"
            text="Full-Stack Developer | Technical Writer | Product Engineer"
            cursor
            duration={18}
            cursorClassName="h-6"
          />
        </div>

        <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="tech-panel rounded-lg border border-border/70 bg-background/80 px-5 py-4 backdrop-blur"
            >
              <p className="font-display text-2xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="tech-code mt-1 text-[11px] uppercase tracking-normal text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex max-w-3xl flex-wrap justify-center gap-2">
          {focusStack.map((item) => (
            <span
              key={item}
              className="tech-code rounded-md border border-border/70 bg-background/80 px-3 py-1.5 text-xs text-muted-foreground shadow-sm backdrop-blur"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 inline-flex flex-wrap justify-center gap-3">
          <RippleButton className="gap-2" onClick={scrollToWork}>
            <Sparkles size={16} />
            See shipped work
          </RippleButton>
          <RippleButton
            variant="outline"
            className="gap-2 bg-background/80 backdrop-blur"
            onClick={() => {
              window.location.href = "mailto:obisiket@gmail.com";
            }}
          >
            <Mail size={16} />
            Contact me
          </RippleButton>
        </div>

        <button
          type="button"
          onClick={() =>
            document
              .getElementById("quests")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="tech-code mt-12 inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          Start interactive tour
          <ArrowDown size={14} />
        </button>
      </div>
    </section>
  );
}
