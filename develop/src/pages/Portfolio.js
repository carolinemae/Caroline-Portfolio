import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Portfolio() {
  const projects = [
    {
      name: 'JobTracker',
      image: require('../images/JobTracker.jpg'),
      url: 'https://vast-woodland-80895.herokuapp.com',
      github: 'https://github.com/carolinemae/Job-Tracker.git',
      desc: 'Create projects and timesheets to record employee and project activity\nCreated for my current workplace',
    },
    {
      name: 'codeIt',
      image: require('../images/codeIt.png'),
      url: 'https://mysterious-journey-75550.herokuapp.com',
      github: 'https://github.com/jkoufalas/codeIt.git',
      desc: 'Collaborative project created with other students\nAn online forum to discuss all things coding',
    },
    // {
    //   name: 'Tech Blog',
    //   image: require('../images/TechBlog.jpg'),
    //   url: 'https://carolines-tech-blog.herokuapp.com',
    //   github: 'https://github.com/jkoufalas/codeIt.git'
    // },
    // {
    //   name: 'YouTrailer',
    //   image: require('../images/YouTrailer.jpg'),
    //   url: 'https://carolinemae.github.io/YouTrailer',
    //   github: 'https://github.com/carolinemae/tech-blog.git',
    //   desc: 'Collaborative project created with other students',
    // },
    // {
    //   name: 'Text Editor',
    //   image: require('../images/JATE.jpg'),
    //   url: 'https://carolines-text-editor.herokuapp.com',
    //   github: 'https://github.com/carolinemae/text-editor.git'
    // },
    // {
    //   name: 'Note Taker',
    //   image: require('../images/NoteTaker.jpg'),
    //   url: 'https://fast-gorge-03219.herokuapp.com',
    //   github: 'https://github.com/carolinemae/note-taker'
    // },
    // {
    //   name: 'Weather Dashboard',
    //   image: require('../images/WeatherDashboard.jpg'),
    //   url: 'https://carolinemae.github.io/Weather-Dashboard/',
    //   github: 'https://github.com/carolinemae/Weather-Dashboard'
    // },
  ];

  console.log(projects);

  return (
    <div className='anchor content-body portfolio' id='portfolio'>
      <h1 className='heading-projects'>Projects</h1>
      <div className='portfolio-content'>
        {projects && projects.map((project) => (
          <div className='project-card' key={project.name}>
            <img className='project-img' src={project.image} alt={project.name} />
            <div className='project-details'>
              <h3 className='project-name'>{project.name}</h3>
              <p className='project-desc'>{project.desc}</p>
              <a href={project.url}  target='_blank' rel='noreferrer' className='project-link'>View</a><br/>
              <a href={project.github}  target='_blank' rel='noreferrer' className='project-link'>GitHub</a>
            </div>
          </div>
        ))}



        {/* <Carousel>
          {projects && projects.map((project) => (
            <Carousel.Item key={project.name}>
              <img
                className="project-img"
                src={project.image}
                alt={project.name}
              />
              <Carousel.Caption>
                <p>{project.url}</p>
                <p>{project.github}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel> */}
      </div>
    </div>
  );
}
