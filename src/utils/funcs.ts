/* eslint-disable @typescript-eslint/no-unused-vars */
import _ from "lodash";
import theme from "../components/styles/themes";

export const generateTabs = (num = 0): string => {
  return "\xA0\xA0" + "\xA0".repeat(num);
};

export const isArgInvalid = (
  arg: string[],
  action: string,
  options: string[]
): boolean =>
  arg[0] !== action || !_.includes(options, arg[1]) || arg.length > 2;

export const getCurrentCmdArry = (history: string[]): string[] => {
  const current = history.length > 0 ? history[0].trim() : "";
  return _.split(current, " ");
};

export const checkRedirect = (
  rerender: boolean,
  currentCommand: string[],
  command: string
): boolean =>
  rerender &&
  currentCommand[0] === command &&
  currentCommand[1] === "go" &&
  currentCommand.length === 3 &&
  !isNaN(parseInt(currentCommand[2]));

export const checkThemeSwitch = (
  rerender: boolean,
  currentCommand: string[],
  themes: string[]
): boolean =>
  rerender &&
  currentCommand[0] === "themes" &&
  currentCommand[1] === "set" &&
  currentCommand.length === 3 &&
  _.includes(themes, currentCommand[2]);

// ✅ Updated argTab with 4th param: hintsCmds
export const argTab = (
  inputVal: string,
  setInputVal: (value: React.SetStateAction<string>) => void,
  setHints: (value: React.SetStateAction<string[]>) => void,
  hintsCmds: string[] = []
): string[] | undefined => {
  const words = inputVal.trim().split(" ");
  const [cmd, arg1, arg2] = words;

  if (inputVal === "themes ") {
    setInputVal("themes set");
    return [];
  }

  if (cmd === "themes" && arg1 !== "set" && "set".startsWith(arg1)) {
    setInputVal("themes set");
    return [];
  }

  if (inputVal === "themes set ") {
    const themeNames = Object.keys(theme);
    setHints(themeNames);
    return themeNames;
  }

  if (cmd === "themes" && arg1 === "set" && arg2) {
    const matchedThemes = Object.keys(theme).filter(t => t.startsWith(arg2));
    return matchedThemes;
  }

  if (inputVal === "projects ") {
    setInputVal("projects go ");
    return [];
  }

  if (inputVal === "socials ") {
    setInputVal("socials go ");
    return [];
  }

  if (inputVal === "projects go ") {
    return [
      "1. AyurvediCure",
      "2. Serena-Care",
      "3. Klimate",
      "4. 3D-Solar-System",
      "5. Apex-Street",
      "6. Recipe-Finder",
      "7. BRT-Bus-Service",
      "8. Elegant-Chess-Masterpiece",
      "9. Paytm-Clone",
      "10. Dukaan-UI-frontend",
      "11. Simple-Todo-Application",
      "12. Cryptex-Console",
    ];
  }

  if (inputVal === "socials go ") {
    return ["1. Github", "2. Dev.to", "3. Facebook", "4. Instagram"];
  }

  return;
};
