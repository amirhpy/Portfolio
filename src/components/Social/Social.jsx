import React from 'react';
import { Link } from 'react-router-dom'

// img
import line from '../../assets/svg/line.svg'
import gitHub from '../../assets/svg/Github.svg'
import linkedin from '../../assets/svg/Linkedin.svg'
import twitter from '../../assets/svg/Twitter.svg'

const Social = () => {
    return (
        <div className='absolute left-5 xl:left-10 top-0 hidden md:block'>
            <div className='flex flex-col items-center'>
                <img src={line} alt='line' />
                <div className='flex flex-col items-center mt-2'>
                    <Link to='https://github.com/amirhpy/' target='_blank' className='group'>
                        <img src={gitHub} alt='github' className=' group-hover:fill-white' />
                    </Link>
                    <Link to='/' target='_blank' className='group my-2'>
                        <img src={twitter} alt='twitter' className='group-hover:fill-white' />
                    </Link>
                    <Link to='https://www.linkedin.com/in/amirhosseinpour/' target='_blank' className='group'>
                        <img src={linkedin} alt='linkedin' className=' group-hover:fill-white' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Social;