import { Mode, useSettings } from "@/context/SettingsContext";
import { useTheme } from "next-themes";
import { useThemeTransition } from "../ui/shadcn-io/theme-toggle-button";
import { useCallback } from "react";

export const useThemeChanger = () => {
  const { setTheme } = useTheme();
  const { settings, updateSettings } = useSettings();
  const { startTransition } = useThemeTransition();
  const handleThemeToggle = useCallback(() => {
    const newMode: Mode = settings.mode === "dark" ? "light" : "dark";

    startTransition(() => {
      const updatedSettings = {
        ...settings,
        mode: newMode,
        theme: {
          ...settings.theme,
          styles: {
            light: settings.theme.styles?.light || {},
            dark: settings.theme.styles?.dark || {},
          },
        },
      };
      updateSettings(updatedSettings);
      setTheme(newMode);
    });
  }, [settings, updateSettings, setTheme, startTransition]);

  const currentTheme =
    settings.mode === "system" ? "light" : (settings.mode as "light" | "dark");

  return {
    currentTheme,
    handleThemeToggle,
  };
};
