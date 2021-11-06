import React from "react";

const ProjectsTab = ({ projectType, setProjectType }) => {
  const changeProject = () => {
    if (projectType === "project") {
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
