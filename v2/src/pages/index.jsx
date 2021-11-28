import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import ContactMenu from "../components/ContactMenu";
import Work from "../components/Work";
import { siteConfig } from "../utils/siteConfig";
import "../styles/components/HomePage.scss";

const { home } = siteConfig;

const Home = () => (
  <>
    <Seo seo />
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
    <Work />
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
    <section id="tools">
      <div className="container">
        <div className="tools__container">
          <div className="tools__header">
            <h2>{home.tools.header}</h2>
          </div>
          <ul className="tools__list">
            {home.tools.list.map(({ icon: Icon, name }, index) => (
              <li
                className="tools__list__item"
                aria-label={name}
                key={`${name}-${index}`}
              >
                <div className="tool__list">
                  <Icon />
                  &nbsp;&nbsp;
                  <span className="tool__list__title">{name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </>
);

export default Home;
