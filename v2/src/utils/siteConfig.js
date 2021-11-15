import { SiTypescript, SiJavascript } from "react-icons/si";
import {
  FaLinkedinIn,
  FaGitAlt,
  // FaEnvelope
} from "react-icons/fa";
import {
  IoLogoReact,
  IoLogoCss3,
  IoLogoSass,
  IoLogoNodejs,
  IoLogoTwitter,
  IoLogoGithub,
} from "react-icons/io5";

export const siteConfig = {
  pageMeta: {
    "not found": {
      title: "Page Not Found",
      description: "The page you are looking for does not exist1q!0)",
    },
    projects: {
      title: "Projects",
      description: "Recent projects I have worked on",
    },
  },

  navLinks: [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },
  ],

  home: {
    hero: {
      header: "Hi, I'm Adelana Onafuwa",
      text: [
        "JavaScript Web Developer",
        "This is my portfolio where you can find out what I'm all about and what I've been up to.",
      ],
    },

    work: {
      header: "My Projects",
      text: "Some of my recent projects",
    },

    about: {
      header: "A Little About Me",
      text: [
        "Fascinated by technology from a young age, I always knew I would end up with a career in tech.",
        "I started my programming journey with PHP but I soon moved on after I discovered the awesomeness of JavaScript.",
        "This is why I've made it a mission to achieve mastery of fullstack JavaScript and its rich ecosystem of libraries and frameworks.",
        "As a result I have since built and contributed to quite a couple of projects using libraries like React and Express.",
        "I'm really eager to see what the future has in store for me as I look to get more involved in open source projects while at the same time, stretching my legs into the world of TypeScript, Vue and Angular.",
      ],
    },

    tools: {
      header: "Tools I Work With",
      list: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "React", icon: IoLogoReact },
        { name: "CSS", icon: IoLogoCss3 },
        { name: "SASS", icon: IoLogoSass },
        { name: "Node", icon: IoLogoNodejs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Git", icon: FaGitAlt },
      ],
    },
  },

  projects: {
    header: "Projects",
    text: "Projects I have worked on",
  },

  contactLinks: [
    { icon: IoLogoTwitter, link: "https://twitter.com/Ade_LaNa", label: "Twitter" },
    { icon: IoLogoGithub, link: "https://github.com/devLana", label: "Github" },
    {
      icon: FaLinkedinIn,
      link: "https://linkedin.com/in/adelana-onafuwa",
      label: "LinkedIn",
    },
    // { icon: FaEnvelope, link: "mailto:contact@adelana.dev", label: "E-Mail" },
  ],
};
