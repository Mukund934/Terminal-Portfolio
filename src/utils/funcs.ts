import _ from "lodash";
import theme from "../components/styles/themes";

/**
 * Generates html tabs
 * @param {number} num - The number of tabs
 * @returns {string} tabs - Tab string
 */
export const generateTabs = (num = 0): string => {
  let tabs = "\xA0\xA0";
  for (let i = 0; i < num; i++) {
    tabs += "\xA0";
  }
  return tabs;
};

/**
 * Check arg is valid
 * @param {string[]} arg - The arg array
 * @param {string} action - The action to compare | "go" | "set"
 * @param {string[]} options - Option array to compare | "dark" | "1"
 * @returns {boolean} boolean
 */
export const isArgInvalid = (
  arg: string[],
  action: string,
  options: string[]
) => arg[0] !== action || !_.includes(options, arg[1]) || arg.length > 2;

/**
 * Transform current cmd & arg into array
 * then return back the array
 * @param {string[]} history - The history array
 * @returns {string[]} array of cmd string
 */
export const getCurrentCmdArry = (history: string[]) =>
  _.split(history[0].trim(), " ");

/**
 * Check current render makes redirect
 * @param {boolean} rerender - is submitted or not
 * @param {string[]} currentCommand - current submitted command
 * @param {string} command - the command of the function
 * @returns {boolean} redirect - true | false
 */
export const checkRedirect = (
  rerender: boolean,
  currentCommand: string[],
  command: string
): boolean =>
  rerender && // is submitted
  currentCommand[0] === command && // current command starts with ('socials'|'projects')
  currentCommand[1] === "go" && // first arg is 'go'
  currentCommand.length > 1 && // current command has arg
  currentCommand.length < 4 && // valid number of arguments (e.g. not `projects go 1 sth`)
  _.includes([1, 2, 3, 4], parseInt(currentCommand[2])); // last arg is one of id

/**
 * Check current render makes redirect for theme
 * @param {boolean} rerender - is submitted or not
 * @param {string[]} currentCommand - current submitted command
 * @param {string[]} themes - theme options array
 * @returns {boolean} redirect - true | false
 */
export const checkThemeSwitch = (
  rerender: boolean,
  currentCommand: string[],
  themes: string[]
): boolean =>
  rerender && // is submitted
  currentCommand[0] === "themes" && // command starts with 'themes'
  currentCommand[1] === "set" && // first arg is 'set'
  currentCommand.length > 1 && // command has arg
  currentCommand.length < 4 && // valid number of arguments (e.g. not `themes set light extra`)
  _.includes(themes, currentCommand[2]); // arg is one of the available themes

/**
 * Perform advanced tab actions
 * @param {string} inputVal - current input value
 * @param {(value: React.SetStateAction<string>) => void} setInputVal - setState for input value
 * @param {(value: React.SetStateAction<string[]>) => void} setHints - setState for hint commands
 * @param {string[]} hintsCmds - hints command array
 * @returns {string[] | undefined} hints command array or undefined if no hints
 */
export const argTab = (
  inputVal: string,
  setInputVal: (value: React.SetStateAction<string>) => void,
  setHints: (value: React.SetStateAction<string[]>) => void,
  hintsCmds: string[]
): string[] | undefined => {
  // 1) if input is 'themes '
  if (inputVal === "themes ") {
    setInputVal(`themes set`);
    return [];
  }

  // 2) if input is 'themes s'
  else if (
    _.startsWith("themes", _.split(inputVal, " ")[0]) &&
    _.split(inputVal, " ")[1] !== "set" &&
    _.startsWith("set", _.split(inputVal, " ")[1])
  ) {
    setInputVal(`themes set`);
    return [];
  }

  // 3) if input is 'themes set '
  else if (inputVal === "themes set ") {
    setHints(_.keys(theme));
    return [];
  }

  // 4) if input starts with 'themes set ' followed by a partial theme name
  else if (_.startsWith(inputVal, "themes set ")) {
    _.keys(theme).forEach(t => {
      if (_.startsWith(t, _.split(inputVal, " ")[2])) {
        hintsCmds = [...hintsCmds, t];
      }
    });
    return hintsCmds;
  }

  // 5) if input is 'projects ' or 'socials '
  else if (inputVal === "projects " || inputVal === "socials ") {
    setInputVal(`${inputVal}go`);
    return [];
  }

  // 6) if input is 'projects g' or 'socials g'
  else if (inputVal === "projects g" || inputVal === "socials g") {
    setInputVal(`${inputVal}o`);
    return [];
  }

  // 7) if input is 'socials go '
  else if (_.startsWith(inputVal, "socials go ")) {
    // Update these values if you have different social media links
    ["1.Github", "2.Dev.to", "3.Facebook", "4.Instagram"].forEach(t => {
      hintsCmds = [...hintsCmds, t];
    });
    return hintsCmds;
  }

  // 8) if input is 'projects go '
  else if (_.startsWith(inputVal, "projects go ")) {
    [
      "1.Paytm-Clone",
      "2.Dukaan-UI-frontenda",
      "3.Simple-Todo-Application",
      "4.youtube-clone-Frontend",
    ].forEach(t => {
      hintsCmds = [...hintsCmds, t];
    });
    return hintsCmds;
  }
};
