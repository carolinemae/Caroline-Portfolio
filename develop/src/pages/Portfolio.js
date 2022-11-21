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
      github: 'https://github.com/carolinemae/Job-Tracker.git'
    },
    {
      name: 'codeIt',
      image: require('../images/codeIt.png'),
      url: 'https://mysterious-journey-75550.herokuapp.com',
      github: 'https://github.com/jkoufalas/codeIt.git'
    },
    {
      name: 'Tech Blog',
      image: require('../images/TechBlog.jpg'),
      url: 'https://carolines-tech-blog.herokuapp.com',
      github: 'https://github.com/jkoufalas/codeIt.git'
    },
    {
      name: 'YouTrailer',
      image: require('../images/YouTrailer.jpg'),
      url: 'https://carolinemae.github.io/YouTrailer',
      github: 'https://github.com/carolinemae/tech-blog.git'
    },
    {
      name: 'Text Editor',
      image: require('../images/JATE.jpg'),
      url: 'https://carolines-text-editor.herokuapp.com',
      github: 'https://github.com/carolinemae/text-editor.git'
    },
    {
      name: 'Note Taker',
      image: require('../images/NoteTaker.jpg'),
      url: 'https://fast-gorge-03219.herokuapp.com',
      github: 'https://github.com/carolinemae/note-taker'
    },
    {
      name: 'Weather Dashboard',
      image: require('../images/NoteTaker.jpg'),
      url: 'https://carolinemae.github.io/Module-06-Challenge',
      github: 'https://github.com/carolinemae/Module-06-Challenge.git'
    },
  ];

  return (
    <div>
      <div className='anchor content-body portfolio' id='portfolio'>
        <Carousel>
          {projects && projects.map((project) => (
            <Carousel.Item>
              <img
                className="project-img"
                src={project.image}
                alt={project.name}
              />
              <Carousel.Caption>
                {/* <h3>{project.name}</h3> */}
                <p>{project.url}</p>
                <p>{project.github}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}

        </Carousel>
      </div>
      {/* <div className='portfolio-resume'></div> */}
    </div>
  );
}
