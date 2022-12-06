import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      name: 'JobTracker',
      image: require('../images/JobTracker.jpg'),
      url: 'https://carolines-job-tracker.herokuapp.com/',
      github: 'https://github.com/carolinemae/Job-Tracker.git',
      desc: 'Solo project created for my current workplace\nCreate projects and timesheets to record project and employee activity',
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
    //   github: 'https://github.com/carolinemae/Weather-Dashboard',
    //   desc: 'Simple application to retrieve weather data using the Open Weather Map API\nOne of my earlier projects'
    // },
  ];

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
      </div>
    </div>
  );
}
