import React from "react";

import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const config = {
  pageMeta: {
    "not found": {
      title: "Page Not Found",
      description: "This page you have requested was not found",
    },
    work: {
      title: "Projects",
      description: "Recent projects and open source projects",
    },
    contact: {
      title: "Contact",
      description: "Get in touch",
    },
  },
  navLinks: [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ],
  contactMenu: [
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/Ade_LaNa",
    },
    {
      name: "github",
      icon: <FaGithub />,
      link: "https://github.com/devLana",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/adelana-onafuwa",
    },
    {
      name: "Mail",
      icon: <FaEnvelope />,
      link: "mailto:contact@adelana.dev",
    },
  ],
  projects: [
    {
      title: "D'Sparkplug",
      imgSrc: "../images/projects/dsparkplug.jpg",
      altText: "D'Sparkplug website",
    },
    {
      title: "React Todo App",
      imgSrc: "../images/projects/todo-app.png",
      altText: "React todo app",
    },
    {
      title: "JavaScript Playground",
      imgSrc: "../images/projects/playground.png",
      altText: "A catalogue of frontend vanilla JavaScript apps",
    },
    {
      title: "React CRUD App",
      imgSrc: "../images/projects/crud-app.png",
      altText: "React CRUD App",
    },
    {
      title: "Github Profile",
      imgSrc: "../images/projects/github-profile.png",
      altText: "Github user profile search app",
    },
  ],
};
