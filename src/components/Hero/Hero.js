import React from "react";
import ContactMenu from "../ContactMenu";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero__container">
          Hi! I'm <h1>Adelana Onafuwa</h1>.
          <p>Software Developer and lover of JavaScript.</p>
          <ContactMenu />
        </div>
      </div>
    </section>
  )
}

export default Hero;
