"use client";

import React, { useState } from "react";
import { AppleHelloEnglishEffect } from "./ui/shadcn-io/apple-hello-effect";
import { cn } from "@/lib/utils";
import { TypingText } from "./ui/shadcn-io/typing-text";
import { RippleButton } from "./ui/shadcn-io/ripple-button";

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
          }}
        />
        {showName && (
          <TypingText
            className="sm:text-5xl text-3xl tracking-tight neg saira-bold mt-4 "
            text="I'm Obisike Treasure"
            duration={1}
            echoComplete={() => {
              setShowProfession(true);
            }}
          />
        )}
        {showProfession && (
          <TypingText
            className="sm:text-lg text-base neg"
            text="Full-Stack Developer | Technical Writer"
            cursor
            duration={0.5}
            echoComplete={() => {
              setShowButton(true);
            }}
            cursorClassName="h-6"
          />
        )}
        {showButton && (
          <div className="inline-flex gap-3">
            <RippleButton className="mt-4">Checkout my work</RippleButton>
            <RippleButton variant="outline" className="mt-4">
              Contact me
            </RippleButton>
          </div>
        )}
      </div>
    </section>
  );
}
