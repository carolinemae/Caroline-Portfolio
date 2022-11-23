import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer>
            <div className='socials'>
                <a href='mailto:carolinemaee@live.com' target='_blank' rel='noreferrer' className='social-link' title='Email'>
                    <FontAwesomeIcon icon={faEnvelope} className='social-icon' />
                </a>
                <a href='https://github.com/carolinemae' target='_blank' rel='noreferrer' className='social-link' title='GitHub'>
                    <FontAwesomeIcon icon={faGithub} className='social-icon' />
                </a>
                <a href='https://www.linkedin.com/in/caroline-thomson-4279aa23a/' target='_blank' rel='noreferrer' className='social-link' title='LinkedIn'>
                    <FontAwesomeIcon icon={faLinkedinIn} className='social-icon' />
                </a>
            </div>
            <p className='copyright-msg'>
              Copyright © 2022 Caroline Thomson All Rights Reserved.
            </p>
        </footer>
    );
}