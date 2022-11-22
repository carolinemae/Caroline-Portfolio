import React from 'react';
import nameGif from '../images/name-script.gif'

export default function Home() {

    return (
        <div id='home'>
            <div className='anchor content-body home'>
                <h1 className='name'>
                    {/* Caroline Thomson */}
                    <img src={nameGif} className='name-img' alt='name' />
                </h1>
            </div>
        </div>
    );
}