"use client";

import React, { useState } from "react";
import { AppleHelloEnglishEffect } from "./ui/shadcn-io/apple-hello-effect";
import { cn } from "@/lib/utils";
import { TypingText } from "./ui/shadcn-io/typing-text";

export default function Hero() {
  const [showName, setShowName] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showProfession, setShowProfession] = useState(false);
  return (
    <section
      aria-label="hero"
      className=" w-full flex items-center justify-center h-full min-h-screen"
    >
      <div className="flex flex-col items-center transit-all justify-center">
        <AppleHelloEnglishEffect
          speed={1.1}
          className={cn("dark:text-white", showName && "scale-60 -mb-2")}
          onAnimationComplete={() => {
            setShowName(true);
            setTimeout(() => {
              setShowProfession(true);
              setTimeout(() => {
                setShowButton(true);
              }, 2000);
            }, 1500);
          }}
        />
        {showName && (
          <TypingText
            className="sm:text-5xl text-3xl neg saira-bold mt-4 "
            text="I'm Obisike Treasure"
            duration={10}
          />
        )}
        {showProfession && (
          <TypingText
            className="sm:text-lg text-base neg"
            text="Full-Stack Developer | Technical Writer"
            cursor
            duration={10}
            cursorClassName="h-6"
          />
        )}
        {showButton && (
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">
            Get Started
          </button>
        )}
      </div>
    </section>
  );
}
