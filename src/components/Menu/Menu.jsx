import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// logo
import logo from '../../assets/svg/logo.svg'
import open from '../../assets/svg/open.svg'
import close from '../../assets/svg/close.svg'

// component
import Social from '../shared/Social/Social';
import MainSocial from '../shared/Social/MainSocial';

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuHandler = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <Social />
            <nav className='sticky top-0 z-10 bg-background'>
                <div className='container flex py-8 items-center justify-between'>
                    <NavLink to='/'>
                        <div className='flex font-fira-700 items-center z-10 text-white'>
                            <img className='mr-3 transform hover:rotate-45 transition-all duration-500' src={logo} alt='logo' />
                            Amirhossein
                        </div>
                    </NavLink>
                    <ul className={`flex flex-col md:flex-row md:items-center py-20 px-10 md:px-0 md:py-0 h-screen md:h-auto absolute md:static left-0 w-full md:w-auto transition-all duration-500 ease-in-out bg-background md:bg-transparent ${menuOpen ? 'top-0' : 'top-[-900px]'}`}>
                        <NavLink onClick={menuHandler} to='/' className={(link) => link.isActive ? 'text-white font-fira-500' : ''}>
                            <li className='mr-8 hover:text-white transition-all'>
                                <span className='text-primary'>#</span>
                                home
                            </li>
                        </NavLink>
                        <NavLink onClick={menuHandler} to='/projects' className={(link) => link.isActive ? 'text-white font-fira-500' : ''}>
                            <li className='mr-8 mt-4 md:mt-0 hover:text-white transition-all'>
                                <span className='text-primary'>#</span>
                                projects
                            </li>
                        </NavLink>
                        <NavLink onClick={menuHandler} to='/about' className={(link) => link.isActive ? 'text-white font-fira-500' : ''}>
                            <li className='mr-8 mt-4 md:mt-0 hover:text-white transition-all'>
                                <span className='text-primary'>#</span>
                                about-me
                            </li>
                        </NavLink>
                        <NavLink onClick={menuHandler} to='/contacts' className={(link) => link.isActive ? 'text-white font-fira-500' : ''}>
                            <li className='mr-8 mt-4 md:mt-0 hover:text-white transition-all'>
                                <span className='text-primary'>#</span>
                                contacts
                            </li>
                        </NavLink>
                        <li className='mt-4 md:mt-0 hover:text-white transition-all'>
                            <span className='text-primary'>#</span>
                            EN
                        </li>
                        <div className='self-center absolute bottom-10 md:hidden'>
                            <MainSocial rowCol='flex-row' spaceBettwen='mx-2' />
                        </div>
                    </ul>
                    <div className='md:hidden z-10'>
                        <img className='cursor-pointer' onClick={menuHandler} src={menuOpen ? `${close}` : `${open}`} alt='menu' />
                    </div>
                </div>
            </nav>
        </>

    );
};

export default Menu;