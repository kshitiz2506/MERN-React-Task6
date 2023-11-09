
import React from 'react';


import projectsData from './projectsData';
import './Projects.css'

const Project = ({ title, description, image }) => {
  return (
    <div className="project">
      <img src={require(`${image}`)} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div className="projects">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
