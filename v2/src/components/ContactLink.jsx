import React from "react";
import PropTypes from "prop-types";

const ContactLink = ({ link, component: Component, label, isFooter }) => (
  <li className="contact__item">
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="contact__link"
      aria-label={label}
    >
      {isFooter ? (
        <>
          <Component />
          &nbsp;&nbsp; {label}
        </>
      ) : (
        <Component />
      )}
    </a>
  </li>
);

ContactLink.propTypes = {
  link: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  isFooter: PropTypes.bool,
};

export default ContactLink;
