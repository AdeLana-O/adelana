import React from "react";

import ContactMenu from "../ContactMenu";

const Hero = () => {

  return (
    <section id="hero">
      <div className="container">
        <div className="hero__container">
          <div className="hero__info">
            <h1>adelana onafuwa</h1>
            <p>Hi, I'm Adelana. A software developer and a huge JavaScript fan.</p>
            <p>Welcome to my portfolio website.</p>
            <ContactMenu className="hero" />
          </div>
          <div className="hero__image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
