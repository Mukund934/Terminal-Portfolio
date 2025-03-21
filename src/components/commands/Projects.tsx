import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't miss.
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Paytm-Clone",
    desc: "A full-stack Paytm clone application that lets users sign up, sign in, update their profile, view account balances, and transfer money. Uses Express, MongoDB, React, Vite, and Tailwind CSS.",
    url: "https://github.com/Mukund934/Paytm-Clone",
  },
  {
    id: 2,
    title: "Dukaan-UI-frontend",
    desc: "A modern and responsive user interface inspired by Dukaan, built with React and Tailwind CSS. Showcases custom components like BlueCard, RevenueCard, Sidebar, and Topbar.",
    url: "https://dukaan-ui-frontend-one.vercel.app/",
  },
  {
    id: 3,
    title: "Simple-Todo-Application",
    desc: "A modern Todo application designed for effortless task management, featuring secure user authentication and full-stack development with Node.js, Express, React, and MongoDB.",
    url: "https://simple-todo-application-navy.vercel.app/",
  },
  {
    id: 4,
    title: "youtube-clone-Frontend",
    desc: "A simple YouTube frontend mimicking built with Next.js, React, TypeScript, and Tailwind CSS. It features video cards, a search bar, and an app bar.",
    url: "https://youtube-clone-frontend-liart.vercel.app/",
  },
];

export default Projects;
