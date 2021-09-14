import React from "react";
import { Link } from "gatsby";

import SiteLogo from "./SiteLogo";
import ContactMenu from "./ContactMenu";

import { config } from "../utils/config";

const { navLinks } = config;

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__menus">
            <SiteLogo />
            <div className="footer__links">
              <div className="quick-links">
                <div>
                  <h3>Quick Links</h3>
                </div>
                <div>
                  <ul className="quick-links__menu">
                    {navLinks.map(({ name, link }) => (
                      <li key={name} className="quick-links__item">
                        <Link to={link} className="quick-link">
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="contact-links">
                <div>
                  <h3>Contact</h3>
                </div>
                <div>
                  <ContactMenu />
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>
              &copy;{" "}
              <time dateTime={new Date().getFullYear()}>
                {new Date().getFullYear()}
              </time>{" "}
              AdeLana. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
