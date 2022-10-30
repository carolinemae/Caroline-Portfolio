import React from 'react';
import '../../styles/Pages.css';
import Download from '../../downloads/Resume.pdf';

export default function Resume() {
  return (
    <div className='content-body'>
      <h1>Resume</h1>
      <a href={Download} download="Resume - Caroline Thomson" target='_blank' rel="noopener noreferrer">
        <button>Download</button>
      </a>
    </div>
  );
}
