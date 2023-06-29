import React from 'react';
import { Link } from 'react-router-dom';

// img
import email from '../../assets/svg/Email.svg'
import gitHub from '../../assets/svg/Github.svg'
import linkedin from '../../assets/svg/Linkedin.svg'
import twitter from '../../assets/svg/Twitter.svg'

const Footer = () => {
    return (
        <footer className='mt-28'>
            <div className='w-full h-px bg-gray'></div>
            <div className='container'>
                <div className='flex justify-between flex-wrap mt-8'>
                    <div>
                        <p className='flex items-center'>
                            <img src={email} alt='email' className='mr-1' />
                            amirhosseinhphpam@gmail.com
                        </p>
                        <p className='text-white'>Front-end Developer</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h4 className='text-2xl font-fira-500 text-white'>Media</h4>
                        <div className='flex items-center mt-2'>
                            <Link to='https://github.com/amirhpy/' target='_blank' className='group'>
                                <img src={gitHub} alt='github' className=' group-hover:fill-white' />
                            </Link>
                            <Link to='/' target='_blank' className='group mx-2'>
                                <img src={twitter} alt='twitter' className='group-hover:fill-white' />
                            </Link>
                            <Link to='https://www.linkedin.com/in/amirhosseinpour/' target='_blank' className='group'>
                                <img src={linkedin} alt='linkedin' className=' group-hover:fill-white' />
                            </Link>
                        </div>
                    </div>
                </div>
                <p className='text-center pb-8 pt-12'>Made by amirhossein ❤️</p>
            </div>
        </footer>
    );
};

export default Footer;