import React, { useState } from 'react';

// components
import MainSkill from './MainSkill';

// shared
import HeadComponent from '../shared/HeadComponent/HeadComponent';

// img
import groupIcon from '../../assets/svg/groupicon.svg'

const Skills = () => {
    const [skills] = useState([
        { id: 1, headSkill: 'Languages', bodySkill: 'TypeScript lua Python Javascript' },
        { id: 2, headSkill: 'Databases', bodySkill: 'SQLite PostgreSQL Mongo' },
        { id: 3, headSkill: 'Tools', bodySkill: 'VSCode Neovim Linux Git Front Awesome Gitlab Photoshop' },
        { id: 4, headSkill: 'Other', bodySkill: 'HTML CSS EJS SCSS Rest Jinja' },
        { id: 5, headSkill: 'Frameworks', bodySkill: 'React Vue Disnake Discord Flast Express' }
    ])
    return (
        <div className='container mt-28'>
            <div className='mb-12'>
                <HeadComponent nameComponent='skills' lineHidden='hidden' hidden='hidden' />
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
        </div>
    );
};

export default Skills;