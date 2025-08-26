"use client";

import React, { useState } from "react";
import { AppleHelloEnglishEffect } from "./ui/shadcn-io/apple-hello-effect";
import { SplittingText } from "./ui/shadcn-io/splitting-text";

export default function Hero() {
  const [showName, setShowName] = useState(false);
  return (
    <section
      aria-label="hero"
      className=" w-full flex items-center justify-center h-full min-h-screen"
    >
      <div className="flex flex-col items-center justify-center">
        <AppleHelloEnglishEffect
          speed={1.1}
          className="dark:text-white"
          onAnimationComplete={() => setShowName(true)}
        />
        {showName && (
          <SplittingText
            className="text-3xl mt-4 font-semibold"
            text="I'm Obisike Treasure"
          />
        )}
      </div>
    </section>
  );
}
