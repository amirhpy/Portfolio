import React from 'react';

// img
import header from '../../assets/img/header.png'

// resume
import resume from '../../assets/pdf/resume.pdf'

const Header = () => {
    return (
        <header className='container'>
            <div className='flex items-center flex-wrap justify-center h-[calc(100vh-88px)]'>
                <div className='w-full md:w-1/2'>
                    <div className='text-start'>
                        <h1 className='font-fira-600 text-3xl text-white'>amirhossein is a <span className='text-primary'>front-end developer</span></h1>
                        <p className='leading-6 mt-8 mb-6'>He crafts responsive websites where technologies <br /> meet creativity</p>
                        <div className='hidden md:flex'>
                            <a href={resume} download className='font-fira-500 text-white border-primary border inline-block px-4 py-2 transition-all ease-in-out duration-500 hover:bg-primary hover:bg-opacity-20'>
                                Resume Me!!
                            </a>
                        </div>
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