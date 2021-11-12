import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { FaTwitter, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

import ContactLink from "./ContactLink";

const ContactMenu = ({ isFooter }) => (
  <ul className="contact__menu">
    <ContactLink
      link="https://twitter.com/Ade_LaNa"
      component={FaTwitter}
      label="Twitter"
      isFooter={isFooter}
    />
    <ContactLink
      link="https://github.com/devLana"
      component={FaGithub}
      label="Github"
      isFooter={isFooter}
    />
    <ContactLink
      link="https://linkedin.com/in/adelana-onafuwa"
      component={FaLinkedinIn}
      label="LinkedIn"
      isFooter={isFooter}
    />
    {/* <ContactLink link="mailto:contact@adelana.dev" component={FaEnvelope} label="EMail" /> isFooter={isFooter} */}
  </ul>
);

export default ContactMenu;
