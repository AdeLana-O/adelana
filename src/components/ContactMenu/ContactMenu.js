import React from "react";
import PropTypes from "prop-types";
import { config } from "../../utils/config";

const ContactMenu = ({ className }) => {
  const { contactMenu } = config;

  return (
    <ul className={`${className}__contact-menu`}>
      {contactMenu.map(menu => (
        <li key={menu.name} className={`${className}__contact-item`}>
          <a
            href={menu.link}
            target="_blank"
            rel="noreferrer noopener"
            className={`${className}__contact-link`}
          >
            {menu.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

ContactMenu.propTypes = {
  className: PropTypes.string.isRequired,
}

export default ContactMenu;
