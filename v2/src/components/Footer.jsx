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
          <div className="footer__menu">
            <SiteLogo />
            <div className="footer__links">
              <div className="footer__quick-links">
                <div>
                  <h3>Quick Links</h3>
                </div>
                <div>
                  <ul className="footer__quick-links-menu">
                    {navLinks.map(({ name, link }) => (
                      <li key={name} className="footer__quick-link-item">
                        <Link to={link} className="footer__quick-link">
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="footer__contact-links">
                <div>
                  <h3>Contact</h3>
                </div>
                <div>
                  <ContactMenu />
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
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
