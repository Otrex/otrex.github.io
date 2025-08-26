import React from "react";
import { ThemeToggleButton } from "./ui/shadcn-io/theme-toggle-button";
import Socials from "@/components/Socials";
import mountedHOC from "./hocs/mountedHOC";
import { useThemeChanger } from "./hooks/useThemeChanger";

export default mountedHOC(() => {
  const { currentTheme, handleThemeToggle } = useThemeChanger();

  return (
    <nav className="fixed left-4 top-4 right-4 z-50">
      <div className="flex items-center justify-between">
        <div className="font-bold text-3xl italic edu-nsw-act-cursive-semibold">
          Otrex
        </div>
        <div className="flex items-center gap-5">
          <Socials />
          <ThemeToggleButton
            theme={currentTheme}
            onClick={handleThemeToggle}
            variant="circle-blur"
            start="top-right"
          />
        </div>
      </div>
    </nav>
  );
});
