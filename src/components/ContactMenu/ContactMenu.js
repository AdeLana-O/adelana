import React from "react";
import PropTypes from "prop-types";

import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Links = ({ name, link, component: Component }) => {
  return (
    <>
      <li className={`${name}__contact-item`}>
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${name}__contact-link`}
        >
          <Component />
        </a>
      </li>
    </>
  );
};

const ContactMenu = ({ className }) => {
  return (
    <ul className={`${className}__contact-menu`}>
      <Links
        name={className}
        link="https://twitter.com/Ade_LaNa"
        component={FaTwitter}
      />
      <Links
        name={className}
        link="https://github.com/devLana"
        component={FaGithub}
      />
      <Links
        name={className}
        link="https://linkedin.com/in/adelana-onafuwa"
        component={FaLinkedin}
      />
      <Links
        name={className}
        link="mailto:contact@adelana.dev"
        component={FaEnvelope}
      />
    </ul>
  );
};

ContactMenu.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ContactMenu;
