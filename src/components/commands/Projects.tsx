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
    title: "AyurvediCure – AI Meets Ayurveda",
    desc: "An AI-powered Ayurvedic health assistant with both chatbot and real-doctor consultations. Built with Python (Flask), React, Vercel & Render. Includes secure JWT login, MongoDB Atlas backend, and CSV-trained natural treatment logic.",
    url: "https://github.com/Mukund934/AyurvediCure",
    techStack:
      "Python, Flask, MongoDB Atlas, React, Tailwind CSS, Vercel, Render",
  },
  {
    id: 2,
    title: "Serena Care – Therapist Portfolio Website",
    desc: "A pixel-perfect, therapist portfolio website built as an internship project for Grow My Therapy. Uses Next.js 14 App Router, Tailwind CSS, ShadCN UI, and framer-motion for animated hero text. Features services, contact form, and FAQs.",
    url: "https://github.com/Mukund934/Serena-Care",
    techStack: "Next.js 14, Tailwind CSS, ShadCN UI, framer-motion, Vercel",
  },
  {
    id: 3,
    title: "Klimate – Modern Weather Dashboard",
    desc: "Responsive weather app using React + TypeScript + TanStack Query with OpenWeather API integration. Features dark/light mode, hourly forecasts (Recharts), custom hooks, and city search with localStorage persistence.",
    url: "https://github.com/Mukund934/Klimate-Wheater-App",
    techStack:
      "React, TypeScript, Tailwind CSS, Recharts, ShadCN UI, TanStack Query, Vite",
  },
  {
    id: 4,
    title: "3D Solar System – Real-Time Simulation",
    desc: "An interactive, no-dependency 3D solar system built using Three.js. Visualizes real-time orbits, planetary motion, zoom/drag controls, dark/light mode, and more. Works instantly via HTML or Node dev server.",
    url: "https://github.com/Mukund934/3D-Solar-System",
    techStack: "Three.js, JavaScript, HTML, CSS, WebGL",
  },
  {
    id: 5,
    title: "Apex Street – A Stylish and Modern E-Commerce UI",
    desc: "A sleek, fully responsive e-commerce frontend built with React, TypeScript, and Tailwind CSS. Features include category-based filtering, cart management, authentication flows, mobile optimization, and smooth animations.",
    url: "https://github.com/Mukund934/Apex-Street",
    techStack:
      "React, TypeScript, Tailwind CSS, React Router, Framer Motion, ShadCN UI",
  },
  {
    id: 6,
    title: "Recipe Finder – Personalized Recipe Discovery App",
    desc: "A full-stack recipe search platform that integrates the Spoonacular API. Supports smart filtering, nutrition data, save-to-favorites, and secure user login. Built for both desktop and mobile use.",
    url: "https://github.com/Mukund934/Recipe-Finder",
    techStack:
      "React, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, Drizzle ORM, Spoonacular API",
  },
  {
    id: 7,
    title: "Cryptex Console – Real-Time Crypto Dashboard",
    desc: "A futuristic, high-performance crypto dashboard with live charts, ETH gas tracking, portfolio visuals, and market stats. Built using Bun, Vite, Tailwind CSS, and TradingView/Chart.js widgets.",
    url: "https://github.com/Mukund934/Cryptex-Console/",
    techStack:
      "React, Tailwind CSS, Vite, Bun, Chart.js, TradingView Widget, CoinGecko API",
  },
  {
    id: 8,
    title: "Elegant Chess Masterpiece – 2-Player Online Chess Game",
    desc: "A beautifully styled two-player chess game with a fully interactive board, clean UI, and responsive layout. Ideal for showcasing real-time logic and classic gameplay in modern tech.",
    url: "https://github.com/Mukund934/Elegant-Chess-Masterpiece",
    techStack: "React, TypeScript, Vite, Tailwind CSS, ShadCN UI",
  },
  {
    id: 9,
    title: "Paytm Clone – Full-Stack Fintech Wallet App",
    desc: "A secure full-stack digital wallet clone with user authentication, JWT auth, money transfers, profile updates, and balance management. Built using the MERN stack with modular frontend/backend setup and production deployment on Vercel/Render.",
    url: "https://github.com/Mukund934/Paytm-Clone",
    techStack: "MongoDB, Express, React, Node.js, Vite, Tailwind CSS, JWT, Zod",
  },
  {
    id: 10,
    title: "Dukaan UI Frontend – Business Dashboard UI",
    desc: "A pixel-perfect, responsive admin dashboard inspired by Dukaan. Features reusable components like cards, tables, navigation sidebar, and transaction panels. Built with React, Vite, and Tailwind CSS for a clean, modular design.",
    url: "https://dukaan-ui-frontend-one.vercel.app/",
    techStack: "React, Vite, Tailwind CSS, CSS Modules",
  },
  {
    id: 11,
    title: "Simple Todo App – Full-Stack Task Manager",
    desc: "A clean, responsive full-stack Todo application with JWT-secured authentication. Users can register, log in, manage personal tasks, mark them complete, and track progress. Ideal for productivity and backend practice.",
    url: "https://simple-todo-application-navy.vercel.app/",
    techStack: "React, Node.js, Express.js, MongoDB, JWT, Mongoose, Vite",
  },
  {
    id: 12,
    title: "BRTS Bus Service – Real-Time Campus Transit System",
    desc: "Live-tracked buses for 300+ users using the HTML5 Geolocation API and WebSockets, streaming GPS data every 5s to a Node.js backend on Render. Built a mobile-first UI with maps, fare tables, and real-time timetables—cutting wait-time queries by 40%. Designed for on-campus deployment with continuous feedback-based upgrades.",
    url: "https://brts-bus-tracking.vercel.app/",
    techStack:
      "HTML, CSS, JavaScript, Geolocation API, WebSockets, Node.js, Render",
  },
];

export default Projects;
