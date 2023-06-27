import React, { useState } from 'react';

// logo
import logo from '../../assets/svg/logo.svg'
import open from '../../assets/svg/open.svg'
import close from '../../assets/svg/close.svg'

import gitHub from '../../assets/svg/Github.svg'
import linkedin from '../../assets/svg/Linkedin.svg'
import twitter from '../../assets/svg/Twitter.svg'

// component
import Social from '../Social/Social';

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <Social />
            <nav className='w-10/12 mx-auto flex py-8 items-center justify-between'>
                <div className='flex font-fira-700 items-center z-10 text-white'>
                    <img className='mr-3' src={logo} alt='logo' />
                    amir
                </div>
                <ul className={`flex flex-col md:flex-row md:items-center py-20 px-10 md:px-0 md:py-0 h-screen md:h-auto absolute md:static left-0 w-full md:w-auto transition-all duration-500 ease-in-out bg-background md:bg-transparent ${menuOpen ? 'top-0' : 'top-[-900px]'}`}>
                    <li className='text-white font-fira-500 mr-8'>
                        <span className='text-primary'>#</span>
                        home
                    </li>
                    <li className='mr-8 mt-4 md:mt-0'>
                        <span className='text-primary'>#</span>
                        works
                    </li>
                    <li className='mr-8 mt-4 md:mt-0'>
                        <span className='text-primary'>#</span>
                        about-me
                    </li>
                    <li className='mt-4 md:mt-0'>
                        <span className='text-primary'>#</span>
                        contacts
                    </li>

                    <div className='self-center absolute bottom-10 md:hidden'>
                        <div className='flex items-center'>
                            <img src={gitHub} alt='github' />
                            <img src={twitter} alt='twitter' className='my-2' />
                            <img src={linkedin} alt='linkedin' />
                        </div>
                    </div>
                </ul>
                <div className='md:hidden z-10'>
                    <img className='cursor-pointer' onClick={() => setMenuOpen(!menuOpen)} src={menuOpen ? `${close}` : `${open}`} alt='menu' />
                </div>
            </nav>
        </>

    );
};

export default Menu;