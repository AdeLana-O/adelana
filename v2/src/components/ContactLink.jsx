import React from "react";
import PropTypes from "prop-types";

const ContactLink = ({ link, component: Component }) => (
  <li className="contact__item">
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="contact__link"
    >
      <Component />
    </a>
  </li>
);

ContactLink.propTypes = {
  link: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
};

export default ContactLink;
