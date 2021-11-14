import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ContactMenu from "./ContactMenu";
import { siteConfig } from "../utils/siteConfig";

const { home } = siteConfig;

const Hero = () => (
  <section id="hero">
    <div className="container">
      <div className="hero__container">
        <div className="hero__details">
          <div className="hero__info">
            <h1>{home.hero.header}</h1>
            {home.hero.text.map((item, index) => (
              <p key={index}>{index === 0 ? <strong>{item}</strong> : item}</p>
            ))}
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
