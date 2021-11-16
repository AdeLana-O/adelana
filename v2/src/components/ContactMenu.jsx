import React from "react";
import PropTypes from "prop-types";
import { siteConfig } from "../utils/siteConfig";

const { contactLinks } = siteConfig;

const ContactMenu = ({ isFooter }) => (
  <ul className="contact__menu">
    {contactLinks.map(({ icon: Icon, link, label }, index) => (
      <li className="contact__item" key={`${label}-${index}`}>
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="contact__link"
          aria-label={label}
        >
          {isFooter ? (
            <>
              <Icon />
              &nbsp;&nbsp; {label}
            </>
          ) : (
            <Icon />
          )}
        </a>
      </li>
    ))}
  </ul>
);

ContactMenu.propTypes = {
  isFooter: PropTypes.bool,
};

export default ContactMenu;
