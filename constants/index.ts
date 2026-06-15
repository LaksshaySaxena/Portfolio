import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/LaksshaySaxena",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/laksshaysaxena",
  },
] as const;

export const FRONTEND_SKILL = [
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Java",
    image: "java.png",
    width: 160,
    height: 160,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 90,
    height: 90,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Git",
    image: "git.png",
    width: 90,
    height: 90,
  },
  {
    skill_name: "Vercel",
    image: "vercel.png",
    width: 120,
    height: 120,
  },
  {
    skill_name: "Streamlit",
    image: "streamlit.png",
    width: 120,
    height: 120,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 110,
    height: 110,
  },
] as const;

export const PROJECTS = [
  {
    title: "CareBridge - Doctor Appointment Platform",
    description:
      "CareBridge is a full-stack healthcare platform built with the MERN stack that enables secure doctor discovery, appointment booking, authentication, doctor management, and admin dashboard functionality.",
    image: "/projects/carebridge.png",
    live: "https://care-bridge-eight.vercel.app/",
    github: "https://github.com/LaksshaySaxena/CareBridge",
  },
  {
    title: "Customer Retention Risk",
    description:
      "An end-to-end Machine Learning pipeline that predicts customer retention risk using behavioral and subscription data, featuring model training, calibration, and a Streamlit dashboard for real-time predictions.",
    image: "/projects/customer-retention-risk.png",
    live: "https://customer-retention-risk.streamlit.app/",
    github: "https://github.com/LaksshaySaxena/Customer-Retention-Risk",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/LaksshaySaxena",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/laksshaysaxena",
      },
      {
        name: "Email",
        icon: null,
        link: "mailto:laksshaysaxena@gmail.com",
      },
    ],
  },
  {
    title: "Quick Links",
    data: [
      {
        name: "About Me",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Skills",
        icon: null,
        link: "#skills",
      },
      {
        name: "Projects",
        icon: null,
        link: "#projects",
      },
      {
        name: "Contact",
        icon: null,
        link: "#contact",
      },
    ],
  },
  {
    title: "Projects",
    data: [
      {
        name: "CareBridge",
        icon: null,
        link: "https://care-bridge-eight.vercel.app/",
      },
      {
        name: "Customer Retention Risk",
        icon: null,
        link: "https://customer-retention-risk.streamlit.app/",
      },
      {
        name: "Resume",
        icon: null,
        link: "/Lakshay-Saxena-Resume.pdf",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/LaksshaySaxena",
};
