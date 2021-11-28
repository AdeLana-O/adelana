import React from "react";
import { Link } from "gatsby";
import SiteLogo from "./SiteLogo";
import ContactMenu from "./ContactMenu";
import "../styles/components/Footer.scss";

import { siteConfig } from "../utils/siteConfig";

const Footer = () => (
  <footer id="footer">
    <div className="container">
      <div className="footer__container">
        <div className="footer__menus">
          <SiteLogo />
          <div className="footer__links">
            <div className="quick-links">
              <h3>Quick Links</h3>
              <ul className="quick-links__menu">
                {siteConfig.navLinks.map(({ name, link }) => (
                  <li key={name} className="quick-links__item">
                    <Link to={link} className="quick-link">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="contact-links">
              <h3>Contact</h3>
              <ContactMenu isFooter />
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            &copy;{" "}
            <time dateTime={new Date().getFullYear()}>
              {new Date().getFullYear()}
            </time>{" "}
            AdeLana Onafuwa
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
