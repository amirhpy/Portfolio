import React from 'react';

// components
import MainSkill from '../../components/Skills/MainSkill';
import SoftSkill from './SoftSkill';

// shared
import HeadPage from '../../components/shared/HeadPage/HeadPage';
import HeadComponent from '../../components/shared/HeadComponent/HeadComponent'
import SideSvg from '../../components/shared/SideSvg/SideSvg';

// img
import aboutImg from '../../assets/img/aboutimg.png'
import dotrec from '../../assets/svg/dotrec.svg'

// database
import { skills, pageAboutSoftSkills } from '../../database/database'

const AboutPage = () => {
    return (
        <section className='relative overflow-hidden mt-12'>
            <SideSvg />
            <div className='container'>
                <HeadPage pageName='about-me' descPage='Who am i?' />
                <div className='mb-12 mt-16'>
                    <div className='flex flex-wrap items-center'>
                        <div className='w-full md:w-3/5'>
                            <p>Hello, i’m Amirhossein</p>
                            <p className='py-10'>
                                Front-End Developer, creative and enthusiastic, seeking new opportunities in the world of web development. I specialize in user interface development and create optimized and visually appealing user experiences using HTML5, CSS3, JavaScript, and React.
                            </p>
                            <p className='mb-9'>
                                My skills include responsive design and building both single-page and multi-page websites. With a passion for continuous learning, I constantly update myself with the latest technologies and development methodologies. I am interested in collaborating with teams or working as a freelancer. Feel free to contact me for further information.
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
                                {pageAboutSoftSkills.map(skills => (
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