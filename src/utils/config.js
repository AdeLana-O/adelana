import React from "react";

import {FaTwitter} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";

export const config = {
  pageMeta: {
    "not found": {
      title: "Page Not Found",
      description: "This page you have requested was not found",
    },
    "work": {
      title: "Projects",
      description: "Recent projects and open source projects",
    },
    "contact": {
      title: "Contact",
      description: "Get in touch",
    }
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
  ]
}
