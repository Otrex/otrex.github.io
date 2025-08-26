import useLocalStorage from "@/components/hooks/useLocalStorage";
import { Any } from "@/lib/type";
import { createContext, useContext } from "react";

export type Mode = "light" | "dark" | "system";
type Settings = Any;
interface SettingsContextType {
  settings: Settings;
  updateSettings: (newSettings: Settings) => void;
}

export const SettingsContext = createContext<SettingsContextType>({
  settings: {},
  updateSettings: () => {},
});

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [settings, setSettings] = useLocalStorage<Settings>("settings", {
    mode: "system",
    theme: {
      styles: {
        light: {},
        dark: {},
      },
    },
  });

  return (
    <SettingsContext.Provider
      value={{
        settings: settings,
        updateSettings: (newSettings: Any) => {
          setSettings((prevSettings: Any) => ({
            ...(prevSettings || {}),
            ...(newSettings || {}),
          }));
        },
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  return (
    useContext(SettingsContext) || {
      settings: {},
      updateSettings: () => {},
    }
  );
};
