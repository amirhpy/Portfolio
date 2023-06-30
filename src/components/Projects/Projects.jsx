import React, { useState } from 'react';

// shared
import HeadComponent from '../shared/HeadComponent/HeadComponent';
import MainProject from './MainProject';

// img
import projectIMG from '../../assets/img/projectimg.jpg'
import rectangleGross from '../../assets/svg/RectangleGross.svg';
import dots from '../../assets/svg/Dots.svg'

const Projects = () => {
    const [projects] = useState([
        { id: 1, img: projectIMG, using: 'HTML CSS Javasctipt', nameProject: 'Form', desc: 'Form' },
        { id: 2, img: projectIMG, using: 'HTML', nameProject: 'We', desc: 'Form' },
        { id: 3, img: projectIMG, using: 'HTML Javasctipt', nameProject: 'Form', desc: 'Form' },
    ])
    return (
        <div className='relative mt-28'>
            <img src={dots} alt='dots' className='absolute -left-12 top-16 hidden lg:block' />
            <img src={rectangleGross} alt='rectangle' className='absolute right-0 bottom-16 hidden lg:block' />
            <div className='container'>
                <div className='mb-12'>
                    <HeadComponent nameComponent='project' />
                </div>
                <div className='flex flex-wrap justify-evenly xl:justify-between'>
                    {projects.map(project => (
                        <MainProject key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;