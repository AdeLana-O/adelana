import React from "react";

import SiteLogo from "../SiteLogo";
import MenuLinks from "../MenuLinks";
import ContactMenu from "../ContactMenu";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__menu">
            <SiteLogo />
            <div className="footer__links">
              <div className="footer__quick-links">
                <h3>Quick Links</h3>
                <MenuLinks className="footer" />
              </div>
              <div className="footer__contact-links">
                <h3>Contact</h3>
                <ContactMenu className="footer" />
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
