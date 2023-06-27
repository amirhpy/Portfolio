import React from 'react';

// img
import line from '../../assets/svg/line.svg'
import gitHub from '../../assets/svg/Github.svg'
import linkedin from '../../assets/svg/Linkedin.svg'
import twitter from '../../assets/svg/Twitter.svg'

const Social = () => {
    return (
        <div className='absolute left-5 lg:left-10 top-0 hidden md:block'>
            <div className='flex flex-col items-center'>
                <img src={line} alt='line' />
                <div className='flex flex-col items-center mt-2'>
                    <img src={gitHub} alt='github' />
                    <img src={twitter} alt='twitter' className='my-2' />
                    <img src={linkedin} alt='linkedin' />
                </div>
            </div>
        </div>
    );
};

export default Social;