import React from 'react';
import projectPortfolio from '../image/projectPortfolio.png';
import './Projects.css';

const Projects = () => {
  return (
    <div className='projects'>
      <div className='projects__header'>
        <h1>
          <span className='projects__header-num'>03.</span>My Projects
        </h1>
        <div className='header-line'></div>
      </div>
      <div className='projects__col'>
        <div className='project__container'>
          <div className='project__container-image'>
            <div className='project__container-imageLayer'></div>
            <img src={projectPortfolio} alt='portfolio' />
          </div>
          <div className='project__container-content'>
            <p>Featured Project</p>
            <h1>Portfolio</h1>
            <div className='project__container-content__textBox'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                dolore consequatur alias molestiae quasi earum dicta quia
                veritatis exercitationem dignissimos?
              </p>
            </div>
            <a href='https://github.com/momo0999/mohannad-zitoun-portfolio'>
              <i className='fab fa-github'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
