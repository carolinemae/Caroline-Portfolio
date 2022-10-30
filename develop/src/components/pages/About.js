import React from 'react';
import '../../styles/Pages.css';
import avatar from '../../images/avatar-01.jpg';

export default function About() {
  return (
    <div className='content-body'>
      <h1>About Me</h1>
      <img src={avatar} alt='avatar' id='portrait'></img>
      <p>
        Hi, my name is <strong>Caroline Thomson</strong>. I am a 27 year-old student, studying a Fullstack Web Development Bootcamp at the University of Adelaide.
        My goal is to gain employment within the industry as a junior developer, so that I can further develop my skills and knowledge.
        My best attributes are that I am a very fast and eager learner.
      </p>
    </div>
  );
}
