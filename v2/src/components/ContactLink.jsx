import React from "react";
import PropTypes from "prop-types";

const ContactLink = ({ link, component: Component, label }) => (
  <li className="contact__item">
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="contact__link"
      aria-label={label}
    >
      <Component />
    </a>
  </li>
);

ContactLink.propTypes = {
  link: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};

export default ContactLink;
