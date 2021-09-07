import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import ContactMenu from "./ContactMenu";

const Hero = () => {
  const data = useStaticQuery(query);

  return (
    <section id="hero">
      <div className="container">
        <div className="hero__container">
          <div className="hero__info">
            <h1>Hi, I'm Adelana Onafuwa.</h1>
            <p>Software developer and big JavaScript fan.</p>
            <p>
              Welcome to my personal website where you can find out details about me
              and also projects I've worked on.
            </p>
          </div>
          <ContactMenu className="hero" />
        </div>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Adelana Onafuwa"
          className="hero__image"
        />
      </div>
    </section>
  );
};

const query = graphql`
  query ProfileImage {
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default Hero;
