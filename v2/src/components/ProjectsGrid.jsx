import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProjectsGrid = ({ projects, projectType }) => {
  let filteredProjects;

  switch (projectType) {
    case "all":
    default:
      filteredProjects = projects;
      break;

    case "projects":
      filteredProjects = projects.filter(project => project.node.type === "project");
      break;

    case "side projects":
      filteredProjects = projects.filter(
        project => project.node.type === "side project"
      );
  }

  return (
    <div className="projects-grid">
      {filteredProjects.map(project => {
        const { id, image, name, slug } = project.node;
        const imageData = getImage(image);

        return (
          <div className="projects-grid__item" key={id}>
            <Link to={`/projects/${slug}`}>
              <GatsbyImage alt={name} image={imageData} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsGrid;
