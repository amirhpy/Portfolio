import React from 'react';

// shared
import Button from '../shared/Button/Button';

const MainProject = ({ img, using, nameProject, desc }) => {
    return (
        <div className='flex flex-col w-full md:w-80 border border-gray'>
            <div>
                <img src={img} alt='project' className='w-full lg:w-auto' />
            </div>
            <div className='p-2 border-b border-t border-gray'>
                <p>{using}</p>
            </div>
            <div className='p-4'>
                <h4 className='font-fira-500 text-2xl text-white'>{nameProject}</h4>
                <p className='py-4 text-sm'>{desc}</p>
                <Button name='Live <~>' />
            </div>
        </div>
    );
};

export default MainProject;