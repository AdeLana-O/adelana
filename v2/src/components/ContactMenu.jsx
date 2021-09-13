import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import ContactLinks from "./ContactLinks";

const ContactMenu = () => (
  <ul className="contact__menu">
    <ContactLinks link="https://twitter.com/Ade_LaNa" component={FaTwitter} />
    <ContactLinks link="https://github.com/devLana" component={FaGithub} />
    <ContactLinks
      link="https://linkedin.com/in/adelana-onafuwa"
      component={FaLinkedin}
    />
    <ContactLinks link="mailto:contact@adelana.dev" component={FaEnvelope} />
  </ul>
);

export default ContactMenu;
