import React from 'react';
import avatar from '../images/avatar-04.jpg';

export default function About() {
  return (
    <div>
      <div className='anchor content-body about' id='about'>
        <div>
          <img src={avatar} className='avatar' alt='avatar' />
        </div>
        <div className='about-content'>
          Hi! My name is Caroline Thomson, I am a 28 year old living in Adelaide, South Australia.<br/>
          Recently graduating from the Full Stack Web Developer Boot Camp at the University of Adelaide,<br/>
          I am hoping to gain employment as a junior full stack developer, and expand my skills and knowledge!<br/>
        </div>
      </div>
    </div>
  );
}
