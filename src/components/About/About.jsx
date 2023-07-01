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
                <div className='flex flex-wrap'>
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
                        <Button name='Read more ->' />
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