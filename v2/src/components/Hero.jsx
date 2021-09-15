import React from "react";

import ContactMenu from "./ContactMenu";

const Hero = () => (
  <section id="hero">
    <div className="container">
      <div className="hero__container">
        <div className="hero__info">
          <div>
            <h1>Hi, I'm Adelana Onafuwa.</h1>
          </div>
          <div>
            <p>Software developer of all things JavaScript.</p>
            <p>
              Welcome to my personal website. Here you will find out details about me
              and projects I've worked on.
            </p>
          </div>
        </div>
        <div className="hero__links">
          <ContactMenu />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
