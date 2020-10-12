import React from "react";

import { contactMenu } from "../../utils/contactMenu";

const ContactMenu = ({ className }) => {
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

export default ContactMenu;
