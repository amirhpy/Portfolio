import React from 'react';

// logo
import logo from '../../assets/svg/logo.svg'

const Menu = () => {
    return (
        <nav className='w-10/12 mx-auto flex py-8 justify-between'>
            <div className='flex font-fira-700 text-white'>
                <img className='mr-3' src={logo} alt='logo' />
                amir
            </div>
            <ul className='flex font-fira-500'>
                <li className='text-white mr-8'>
                    <span className='text-primary'>#</span>
                    home
                </li>
                <li className='mr-8'>
                    <span className='text-primary'>#</span>
                    works
                </li>
                <li className='mr-8'>
                    <span className='text-primary'>#</span>
                    about-me
                </li>
                <li className=''>
                    <span className='text-primary'>#</span>
                    contacts
                </li>
            </ul>
        </nav>
    );
};

export default Menu;