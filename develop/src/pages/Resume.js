import React from 'react';
import Download from '../downloads/Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStar } from '@fortawesome/free-regular-svg-icons';

export default function Resume() {

  const starSolid = <FontAwesomeIcon icon={faStarSolid} />
  const star = <FontAwesomeIcon icon={faStar} />

  return (
    <div className='anchor content-body resume' id='resume'>
      <div className='lists'>
      <div className='list skills-div'>
          <h3>Skills</h3>
          <table>
            <tbody>
              <tr>
                <td className='star-data'>{starSolid}{starSolid}{starSolid}{starSolid}{starSolid}</td>
                <td>HTML, Git & CSS</td>
              </tr>
              <tr>
                <td className='star-data'>{starSolid}{starSolid}{starSolid}{starSolid}{star}</td>
                <td>JavaScript</td>
              </tr>
              <tr>
                <td className='star-data'>{starSolid}{starSolid}{starSolid}{starSolid}{star}</td>
                <td>React</td>
              </tr>
              <tr>
                <td className='star-data'>{starSolid}{starSolid}{starSolid}{starSolid}{star}</td>
                <td>MySQL and NoSQL</td>
              </tr>
              <tr>
                <td className='star-data'>{starSolid}{starSolid}{starSolid}{starSolid}{star}</td>
                <td>Node.js</td>
              </tr>
              <tr>
                <td className='star-data'>{starSolid}{starSolid}{starSolid}{starSolid}{star}</td>
                <td>Express.js</td>
              </tr>
              <tr>
                <td className='star-data'>{starSolid}{starSolid}{starSolid}{star}{star}</td>
                <td>APIs - Web, Third-Party & Server Side</td>
              </tr>
              <tr>
                <td className='star-data'>{starSolid}{star}{star}{star}{star}</td>
                <td>Python</td>
              </tr>
              <tr>
                <td className='star-data'>{starSolid}{star}{star}{star}{star}</td>
                <td>C++</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='list attr-div'>
          <h3>Attributes</h3>
          <table>
            <tbody>
              <tr>
                <td className='star-data'>{starSolid}{starSolid}{starSolid}{starSolid}{starSolid}</td>
                <td>Communication and coordination</td>
              </tr>
              <tr>
                <td className='star-data'>{starSolid}{starSolid}{starSolid}{starSolid}{starSolid}</td>
                <td>Attention to detail</td>
              </tr>
              <tr>
                <td className='star-data'>{starSolid}{starSolid}{starSolid}{starSolid}{starSolid}</td>
                <td>Ability to grasp new concepts quickly</td>
              </tr>
              <tr>
                <td className='star-data'>{starSolid}{starSolid}{starSolid}{starSolid}{starSolid}</td>
                <td>Computer literacy</td>
              </tr>
              <tr>
                <td className='star-data'>{starSolid}{starSolid}{starSolid}{starSolid}{starSolid}</td>
                <td>Organisation and planning</td>
              </tr>
              <tr>
                <td className='star-data'>{starSolid}{starSolid}{starSolid}{starSolid}{starSolid}</td>
                <td>Ability to work independently & within a team</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='btn-span'>
        <a href={Download} download="Resume - Caroline Thomson" target='_blank' rel="noopener noreferrer">
          <button className='download-btn'>Download Resume</button>
        </a>
      </div>
    </div>
  );
}
