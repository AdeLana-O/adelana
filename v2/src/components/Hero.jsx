import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import ContactMenu from "./ContactMenu";

const Hero = () => (
  <section id="hero">
    <div className="container">
      <div className="hero__container">
        <div className="hero__details">
          <div className="hero__info">
            <h1>Hi, I'm Adelana Onafuwa.</h1>
            <p>
              <strong>JavaScript Software developer.</strong>
            </p>
            <p>
              Welcome to my personal website. Here you will find out details about me
              and projects I've worked on.
            </p>
          </div>
          <div className="hero__links">
            <ContactMenu />
          </div>
        </div>
        <div className="hero__image">
          <StaticImage src="../images/profile.png" alt="Adelana Onafuwa" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
