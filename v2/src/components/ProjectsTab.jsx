import React from "react";

const ProjectsTab = ({ projectType, setProjectType }) => {
  const setToAll = () => {
    setProjectType("all");
  };

  const setToProjects = () => {
    setProjectType("projects");
  };

  const setToSideProjects = () => {
    setProjectType("side projects");
  };

  return (
    <div className="projects-tab">
      <ul className="projects-tab__btns">
        <li className="projects-tab__item">
          <button
            onClick={setToAll}
            className={
              projectType === "all"
                ? "projects-tab__btn projects-tab__btn--active"
                : "projects-tab__btn"
            }
          >
            All
          </button>
        </li>
        <li className="projects-tab__item">
          <button
            onClick={setToProjects}
            className={
              projectType === "projects"
                ? "projects-tab__btn projects-tab__btn--active"
                : "projects-tab__btn"
            }
          >
            Projects
          </button>
        </li>
        <li className="projects-tab__item">
          <button
            onClick={setToSideProjects}
            className={
              projectType === "side projects"
                ? "projects-tab__btn projects-tab__btn--active"
                : "projects-tab__btn"
            }
          >
            Side Projects
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsTab;
