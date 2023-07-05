import React from 'react';

// components
import MainSkill from './MainSkill';

// shared
import HeadComponent from '../shared/HeadComponent/HeadComponent';

// img
import groupIcon from '../../assets/svg/groupicon.svg'

// database
import { skills } from '../../database/database';

const Skills = () => {
    return (
        <section className='container mt-28'>
            <div className='mb-12'>
                <HeadComponent nameComponent='skills' lineHidden='w-52' hidden='hidden' />
            </div>
            <div className='flex items-center flex-wrap'>
                <div className='w-full md:w-2/5'>
                    <img src={groupIcon} alt='icon' className='mx-auto' />
                </div>
                <div className='w-full md:w-3/5 flex flex-wrap justify-between items-start sm:justify-end mt-12 md:mt-0 gap-y-2 sm:gap-4'>
                    {skills.map(skill => (
                        <MainSkill key={skill.id} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;