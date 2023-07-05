import React from 'react';

// img
import rectangleGross from '../../../assets/svg/RectangleGross.svg';
import dots from '../../../assets/img/dots.png'

const SideSvg = () => {
    return (
        <>
            <img src={dots} alt='dots' className='absolute -left-6 top-52 hidden lg:block' />
            <img src={rectangleGross} alt='rectangle' className='absolute rotate-180 -left-5 bottom-36 hidden lg:block' />
            <img src={rectangleGross} alt='rectangle' className='absolute right-0 top-28 hidden lg:block' />
            <img src={dots} alt='dots' className='absolute -right-5 bottom-96 hidden lg:block' />
        </>
    );
};

export default SideSvg;