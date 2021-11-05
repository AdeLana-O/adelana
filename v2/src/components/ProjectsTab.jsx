import React from "react";

const ProjectsTab = ({ type, setProjectType }) => {
  const changeProject = () => {
    if (type === "project") {
      setProjectType("side project");
    } else {
      setProjectType("project");
    }
  };

  return (
    <section id="projects-tab">
      <div className="container">
        <div className="projects-tab__container">
          <p>Projects Tab</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTab;
