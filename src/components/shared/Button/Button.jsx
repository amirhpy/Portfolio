import React from 'react';

// img
import live from '../../../assets/svg/live.svg'

const Button = () => {
    return (
        <div className='border-primary border inline-block px-4 py-2 hover:bg-primary hover:bg-opacity-20'>
            {/* <img src={live} alt='click' /> */}
            <p className='font-fira-500 text-white'>Contact me!!</p>
        </div>
    );
};

export default Button;