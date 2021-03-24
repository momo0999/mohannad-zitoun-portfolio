import projectPortfolio from './image/projectPortfolio.png';
import myBlog from './image/myBlog.png';
const projects = [
  {
    name: 'Blog',
    desc:
      'This is a blog and a photo gallery where the admin can manage and update the content.',
    img: myBlog,
    githubLink: 'https://github.com/momo0999/blog-mern',
    websiteLink: 'https://mernstack-blog.herokuapp.com/',
    technologies: ['React', 'Redux', 'Styled-components', 'Node.js', 'MongoDB'],
  },
  {
    name: 'Portfolio',
    desc: 'This my latest portfolio website where you are right now. ',
    img: projectPortfolio,
    githubLink: 'https://github.com/momo0999/mohannad-zitoun-portfolio',
    websiteLink: 'https://www.mohannadzitoun.com/',
    technologies: ['React', 'Css', 'JavaScript'],
  },
];

export default projects;
