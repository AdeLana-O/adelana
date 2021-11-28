import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { siteConfig } from "../utils/siteConfig";
import "../styles/components/About.scss";

const { home } = siteConfig;

const About = () => (
  <section id="about">
    <div className="container">
      <div className="about__container">
        <div className="about__info">
          <div className="about__header">
            <h2>{home.about.header}</h2>
          </div>
          <div className="about__details">
            {home.about.text.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="about__image">
          <StaticImage src="../images/programmer.svg" alt="Image" />
        </div>
      </div>
    </div>
  </section>
);

export default About;
