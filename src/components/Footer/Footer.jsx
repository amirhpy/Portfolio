import React from 'react';

// img
import email from '../../assets/svg/Email.svg'
import MainSocial from '../shared/Social/MainSocial';

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
                        <MainSocial rowCol='flex-row mt-1' spaceBettwen='mx-2' />
                    </div>
                </div>
                <p className='text-center pb-8 pt-12'>Made by amirhossein ❤️</p>
            </div>
        </footer>
    );
};

export default Footer;