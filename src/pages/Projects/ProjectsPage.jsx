import React from 'react';

// components
import MainProject from '../../components/Projects/MainProject';
import SmallProject from './SmallProject';

// shared
import HeadPage from '../../components/shared/HeadPage/HeadPage';
import HeadComponent from '../../components/shared/HeadComponent/HeadComponent';
import SideSvg from '../../components/shared/SideSvg/SideSvg';

// database
import { pageProjects, PageProjectSkills } from '../../database/database'

const ProjectsPage = () => {
    return (
        <section className='relative mt-12 overflow-hidden'>
            <SideSvg />
            <div className='container'>
                <HeadPage pageName='projects' descPage='List of my projects' />
                <div className='mb-12 mt-16'>
                    <HeadComponent nameComponent='complete-apps' lineHidden='hidden' hidden='hidden' />
                </div>
                <div className='flex flex-wrap gap-4 justify-evenly xl:justify-between'>
                    {pageProjects.map(project => (
                        <MainProject key={project.id} {...project} />
                    ))}
                </div>
                <div className='mb-12 mt-20'>
                    <HeadComponent nameComponent='small-projects' lineHidden='hidden' hidden='hidden' />
                </div>
                <div className='flex flex-wrap gap-1 items-start justify-between'>
                    {PageProjectSkills.map(skill => (
                        <SmallProject key={skill.id} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;