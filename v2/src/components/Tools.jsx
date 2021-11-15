import React from "react";
import { siteConfig } from "../utils/siteConfig";

const { home } = siteConfig;

const Tools = () => (
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
);

export default Tools;
