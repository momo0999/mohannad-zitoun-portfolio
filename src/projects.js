import projectPortfolio from './image/projectPortfolio.png';
import myBlog from './image/myBlog.png';
const projects = [
  {
    name: 'Portfolio',
    desc: 'This my latest portfolio website where you are right now. ',
    img: projectPortfolio,
    githubLink: 'https://github.com/momo0999/mohannad-zitoun-portfolio',
    websiteLink: 'https://www.mohannadzitoun.com/',
    technologies: ['HTML', 'Css', 'JavaScript', 'React'],
  },
  {
    name: 'Blog',
    desc:
      'This is a blog and a photo gallery where the admin can manage and update the content.',
    img: myBlog,
    githubLink: 'https://github.com/momo0999/blog-mern',
    websiteLink: 'https://mernstack-blog.herokuapp.com/',
    technologies: [
      'HTML',
      'Css',
      'JavaScript',
      'React.js',
      'Redux',
      'Node.js',
      'MongoDB',
    ],
  },
];

export default projects;
