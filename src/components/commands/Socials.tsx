import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
  checkRedirect,
  generateTabs,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Socials: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "socials")) {
      socials.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5"]) ? (
      <Usage cmd="socials" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="socials">
      <ProjectsIntro>Here are my social links</ProjectsIntro>
      {socials.map(({ id, title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {url}</CmdDesc>
        </CmdList>
      ))}
      <Usage cmd="socials" marginY />
    </HelpWrapper>
  );
};

const socials = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/Mukund934",
    tab: 3,
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/mukund-thakur-b9949b212/",
    tab: 3,
  },
  {
    id: 3,
    title: "LeetCode (Coding Profile)",
    url: "https://leetcode.com/u/Mukund_TH04/",
    tab: 1,
  },
  {
    id: 4,
    title: "Cloud Skills Boost",
    url: "https://www.cloudskillsboost.google/public_profiles/0512140b-41ef-4fd1-9b86-61756a5cd485",
    tab: 2,
  },
  {
    id: 5,
    title: "Instagram",
    url: "https://www.instagram.com/mukund.th04?utm_source=qr&igsh=M3dsbjJoZW5ucnhw",
    tab: 0,
  },
];

export default Socials;
