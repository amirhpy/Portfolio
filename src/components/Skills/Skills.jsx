import React from 'react';

// components
import MainSkill from './MainSkill';

// shared
import HeadComponent from '../shared/HeadComponent/HeadComponent';

// img
import groupIcon from '../../assets/svg/groupicon.svg'

const Skills = () => {
    return (
        <div className='container mt-28'>
            <div className='mb-12'>
                <HeadComponent nameComponent='Skills' lineHidden='hidden' hidden='hidden' />
            </div>
            <div className='flex items-center'>
                <div className='w-2/5'>
                    <img src={groupIcon} alt='icon' className='' />
                </div>
                <div className='w-3/5 flex flex-wrap justify-end'>
                    <MainSkill />
                    <MainSkill />
                    <MainSkill />
                    <MainSkill />
                    <MainSkill />
                </div>
            </div>
        </div>
    );
};

export default Skills;