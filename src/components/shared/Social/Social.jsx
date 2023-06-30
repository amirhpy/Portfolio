import React from 'react';

// img
import line from '../../../assets/svg/line.svg'

// shared
import MainSocial from './MainSocial';

const Social = () => {
    return (
        <div className='absolute left-5 xl:left-10 top-0 hidden md:block'>
            <div className='flex flex-col items-center'>
                <img src={line} alt='line' />
                <MainSocial rowCol='flex-col mt-2' spaceBettwen='my-2' />
            </div>
        </div>
    );
};

export default Social;