import React from 'react';

// shared
import HeadComponent from '../shared/HeadComponent/HeadComponent';
import Button from '../shared/Button/Button';

// img
import aboutImg from '../../assets/img/aboutimg.png'
import rectangleGross from '../../assets/svg/RectangleGross.svg';
import dots from '../../assets/img/dots.png'

const About = () => {
    return (
        <section className='relative mt-28 overflow-hidden'>
            <img src={rectangleGross} alt='rectangle' className='absolute rotate-180 -left-5 top-28 hidden lg:block' />
            <img src={dots} alt='dots' className='absolute -right-4 bottom-28 hidden lg:block' />
            <div className='container'>
                <div className='mb-12'>
                    <HeadComponent nameComponent='about-me' lineHidden='w-80' hidden='hidden' />
                </div>
                <div className='flex flex-wrap items-center'>
                    <div className='w-full md:w-3/5'>
                        <p>Hello, i’m Amirhossein</p>
                        <p className='py-10'>
                            Front-End Developer, creative and enthusiastic, seeking new opportunities in the world of web development. I specialize in user interface development and create optimized and visually appealing user experiences using HTML5, CSS3, JavaScript, and React.
                        </p>
                        <p className='mb-9'>
                            My skills include responsive design and building both single-page and multi-page websites. With a passion for continuous learning, I constantly update myself with the latest technologies and development methodologies. I am interested in collaborating with teams or working as a freelancer. Feel free to contact me for further information.
                        </p>
                        <Button name='Read more ->' target='_self' toLink='/about' />
                    </div>
                    <div className='w-full md:w-2/5 flex justify-center md:justify-end'>
                        <img src={aboutImg} alt='img' className='' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;