import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import ContactLink from "./ContactLink";

const ContactMenu = () => (
  <ul className="contact__menu">
    <ContactLink link="https://twitter.com/Ade_LaNa" component={FaTwitter} />
    <ContactLink link="https://github.com/devLana" component={FaGithub} />
    <ContactLink
      link="https://linkedin.com/in/adelana-onafuwa"
      component={FaLinkedin}
    />
    <ContactLink link="mailto:contact@adelana.dev" component={FaEnvelope} />
  </ul>
);

export default ContactMenu;
