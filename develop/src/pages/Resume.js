import React from 'react';
import Download from '../downloads/Resume.pdf';

export default function Resume() {
  return (
    <div>
      <div className='anchor content-body resume' id='resume'>
        <a href={Download} download="Resume - Caroline Thomson" target='_blank' rel="noopener noreferrer">
          <button>Download</button>
        </a>
      </div>
      <div className='resume-contact'></div>
    </div>
  );
}
