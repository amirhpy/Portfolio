import React from 'react';

// components
import MainSkill from '../../components/Skills/MainSkill';
import SoftSkill from './SoftSkill';

// shared
import HeadPage from '../../components/shared/HeadPage/HeadPage';
import HeadComponent from '../../components/shared/HeadComponent/HeadComponent'

// img
import aboutImg from '../../assets/img/aboutimg.png'
import rectangleGross from '../../assets/svg/RectangleGross.svg';
import dotrec from '../../assets/svg/dotrec.svg'
import dots from '../../assets/img/dots.png'

const AboutPage = () => {
    const skills = [
        { id: 1, headSkill: 'Databases', bodySkill: 'SQLite PostgreSQL Mongo' },
        { id: 2, headSkill: 'Languages', bodySkill: 'TypeScript lua Python Javascript' },
        { id: 3, headSkill: 'Tools', bodySkill: 'VSCode Neovim Linux Git Front Awesome Gitlab Photoshop' },
        { id: 4, headSkill: 'Other', bodySkill: 'HTML CSS EJS SCSS Rest Jinja' },
        { id: 5, headSkill: 'Frameworks', bodySkill: 'React Vue Disnake Discord Flast Express' }
    ]

    const softSkills = [
        {id: 1, skills: 'I often bike with my friends'},
        {id: 2, skills: 'I often bike with my friends'},
        {id: 3, skills: 'I often bike with my friends'},
        {id: 4, skills: 'I often bike with my friends'},
        {id: 5, skills: 'I often bike with my friends'},
        {id: 6, skills: 'I often bike with my friends'},
        {id: 7, skills: 'I often bike with my friends'}
    ]
    return (
        <section className='relative overflow-hidden mt-12'>
            <img src={dots} alt='dots' className='absolute -left-6 top-52 hidden lg:block' />
            <img src={rectangleGross} alt='rectangle' className='absolute rotate-180 -left-5 bottom-36 hidden lg:block' />
            <img src={rectangleGross} alt='rectangle' className='absolute right-0 top-28 hidden lg:block' />
            <img src={dots} alt='dots' className='absolute -right-5 bottom-96 hidden lg:block' />
            <div className='container'>
                <HeadPage pageName='about-me' descPage='Who am i?' />
                <div className='mb-12 mt-16'>
                    <div className='flex flex-wrap items-center'>
                        <div className='w-full md:w-3/5'>
                            <p>Hello, i’m Elias!</p>
                            <p className='py-10'>
                                I’m a self-taught front-end developer based in Kyiv, Ukraine.
                                I can develop responsive websites from scratch and raise them
                                into modern user-friendly web experiences.
                            </p>
                            <p className='mb-9'>
                                Transforming my creativity and knowledge into a websites has been my passion for over a year.
                                I have been helping various clients to establish their presence online.
                                I always strive to learn about the newest technologies and frameworks.
                            </p>
                        </div>
                        <div className='w-full md:w-2/5 flex justify-center md:justify-end'>
                            <img src={aboutImg} alt='img' className='' />
                        </div>
                    </div>
                </div>
                <div className='mt-28'>
                    <HeadComponent nameComponent='skills' lineHidden='hidden' hidden='hidden' />
                    <div className='w-full flex flex-wrap justify-between items-start mt-12 gap-y-2 sm:gap-4'>
                        {skills.map(skill => (
                            <MainSkill key={skill.id} {...skill} />
                        ))}
                    </div>
                    <div className='mt-20'>
                        <HeadComponent nameComponent='soft-skills' lineHidden='hidden' hidden='hidden' />
                        <div className='flex flex-wrap justify-center lg:justify-between items-start mt-7'>
                            <div className='lg:flex-1 flex flex-wrap gap-4'>
                                {softSkills.map(skills => (
                                    <SoftSkill key={skills.id} {...skills} />
                                ))}
                            </div>
                            <div className='mt-12 lg:mt-0 lg:flex-0'>
                                <img src={dotrec} alt='dots' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;