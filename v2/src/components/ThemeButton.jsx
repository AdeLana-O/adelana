import React, { useContext } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { ThemeContext } from "../context";
import "../styles/components/ThemeButton.scss";

const ThemeButton = () => {
  const { theme, themeToggler } = useContext(ThemeContext);

  return (
    <div className="theme__btn__wrapper">
      {theme === "light" ? (
        <button className="theme__btn theme__btn--light" onClick={themeToggler}>
          <BsSunFill />
        </button>
      ) : (
        <button className="theme__btn theme__btn--dark" onClick={themeToggler}>
          <BsMoonFill />
        </button>
      )}
    </div>
  );
};

export default ThemeButton;
