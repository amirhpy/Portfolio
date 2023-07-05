import React from 'react';
import { Link } from 'react-router-dom'

const Button = ({ name }) => {
    return (
        <Link to='/'>
            <div className='border-primary border inline-block px-4 py-2 transition-all ease-in-out duration-500 hover:bg-primary hover:bg-opacity-20'>
                <p className='font-fira-500 text-white'>{name}</p>
            </div>
        </Link>
    );
};

export default Button;