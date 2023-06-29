import React from 'react';

// shared
import HeadComponent from '../shared/HeadComponent/HeadComponent';

// img
import aboutImg from '../../assets/img/aboutimg.png'
import rectangleGross from '../../assets/svg/RectangleGross.svg';
import dots from '../../assets/svg/dots.svg'

const About = () => {
    return (
        <div className='relative mt-28'>
            <img src={rectangleGross} alt='rectangle' className='absolute rotate-180 -left-5 top-28 hidden lg:block' />
            <img src={dots} alt='dots' className='absolute right-0 bottom-28 hidden lg:block' />
            <div className='container'>
                <div className='mb-12'>
                    <HeadComponent nameComponent='about-me' lineHidden='hidden' hidden='hidden' />
                </div>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-3/5'>
                        <p>Hello, i’m Elias!</p>
                        <p className='py-10'>
                            I’m a self-taught front-end developer based in Kyiv, Ukraine.
                            I can develop responsive websites from scratch and raise them
                            into modern user-friendly web experiences.
                        </p>
                        <p>
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
        </div>
    );
};

export default About;