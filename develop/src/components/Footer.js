import React from 'react';
import '../styles/Footer.css';
import GitHub from '../images/icon-github.png';
import LinkedIn from '../images/icon-linkedin.png';
import StackOverflow from '../images/icon-stackoverflow.png';

function Footer() {
    return (
        <div className='footer'>
            <div>
                Created & Designed by <strong>Caroline Thomson</strong>
            </div>
            <div className='footer-content'>
                Find me on: 
                <a href='https://github.com/carolinemae' target='_blank' rel="noopener noreferrer">
                    <img src={GitHub} alt='github' className='social-icon'></img>
                </a>
                <a href='https://www.linkedin.com/in/caroline-thomson-4279aa23a/' target='_blank' rel="noopener noreferrer">
                    <img src={LinkedIn} alt='linkedin' className='social-icon'></img>
                </a>
                <a href='https://stackoverflow.com/users/19124967/caroline-thomson' target='_blank' rel="noopener noreferrer">
                    <img src={StackOverflow} alt='stackoverflow' className='social-icon'></img>
                </a>
            </div>
        </div>
    )
}

export default Footer;