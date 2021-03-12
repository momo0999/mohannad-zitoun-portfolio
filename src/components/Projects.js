import React, { Fragment } from 'react';
import projects from '../projects';
import './Projects.css';

const Projects = () => {
  const renderedProjects = projects.map(
    ({ name, img, desc, githubLink, websiteLink, technologies }) => {
      return (
        <Fragment>
          <div className='project__card'>
            <div className='project__card-row'>
              <i className='far fa-folder'></i>

              <div>
                <a rel='noreferrer' target='_blank' href={websiteLink}>
                  <i className='fas fa-external-link-alt'></i>
                </a>
                <a rel='noreferrer' target='_blank' href={githubLink}>
                  <i className='fab fa-github'></i>
                </a>
              </div>
            </div>
            <h1>{name}</h1>
            <p>{desc}</p>
            <div className='project__card-rowTech'>
              {technologies.map((tech) => {
                return <p className='tech'>{tech}</p>;
              })}
            </div>
          </div>
        </Fragment>
      );
    }
  );
  return (
    <div className='projects'>
      <div className='projects__header'>
        <h1>
          <span className='projects__header-num'>03.</span>Projects
        </h1>
        <div className='header-line'></div>
      </div>
      <div className='projects__col'>{renderedProjects}</div>
    </div>
  );
};

export default Projects;
