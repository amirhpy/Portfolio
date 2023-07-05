import React from 'react';

// shared
import HeadComponent from '../shared/HeadComponent/HeadComponent';
import MainProject from './MainProject';

// img
import rectangleGross from '../../assets/svg/RectangleGross.svg';
import dots from '../../assets/img/dots.png'

// database
import { projects } from '../../database/database';

const Projects = () => {
    return (
        <section className='relative mt-28'>
            <img src={dots} alt='dots' className='absolute -left-12 top-16 hidden lg:block' />
            <img src={rectangleGross} alt='rectangle' className='absolute right-0 bottom-16 hidden lg:block' />
            <div className='container'>
                <div className='mb-12'>
                    <HeadComponent nameComponent='project' lineHidden='w-36 lg:w-96' />
                </div>
                <div className='flex flex-wrap justify-evenly xl:justify-between gap-4'>
                    {projects.map(project => (
                        <MainProject key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;