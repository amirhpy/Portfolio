import React from 'react';

// img
import header from '../../assets/img/header.png'

// shared
import Button from '../shared/Button/Button';

const Header = () => {
    return (
        <header className='container'>
            <div className='flex items-center flex-wrap justify-center h-[calc(100vh-88px)]'>
                <div className='w-full md:w-1/2'>
                    <div className='text-start'>
                        <h1 className='font-fira-600 text-3xl text-white'>amirhossein is a <span className='text-primary'>front-end developer</span></h1>
                        <p className='leading-6 mt-8 mb-6'>He crafts responsive websites where technologies <br /> meet creativity</p>
                        <div className='hidden md:flex'><Button name='Resume me!!' target='_self' toLink='' /></div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex flex-col items-center md:items-end'>
                    <img src={header} alt='header' className='w-10/12' />
                    <div className='flex w-9/12 items-center md:ml-auto p-2 border border-gray'>
                        <div className='w-4 h-4 mr-2.5 bg-primary'></div>
                        <p>Currently working on <span className='font-fira-500 text-white'>Portfolio</span></p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;