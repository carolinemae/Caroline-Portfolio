import React from 'react';
import avatar from '../images/caroline.png';

export default function About() {
  return (
    <div>
      <div className='anchor content-body about' id='about'>
        <div>
          <img src={avatar} className='avatar' alt='avatar' />
        </div>
        <div className='about-content'>
          <p>
            Hi! My name is <em>Caroline Thomson</em>. I am a 28 year old living in Adelaide, South Australia.
          </p>
          <p>
            Recently graduating from the <em>Full Stack Web Developer Boot Camp</em> at the <em>University of Adelaide</em>,
            I am hoping to gain employment as a junior full stack developer, and expand my skills and knowledge.
          </p>
          <p>
            I have had a keen interest in all things coding since I was 12 years old, where I was creating simple HTML & CSS websites for fun.
            Since then, any time I've had the chance to learn more about coding, I have thoroughly enjoyed it and have absolutely loved the challenge.
          </p>
        </div>
      </div>
    </div>
  );
}
