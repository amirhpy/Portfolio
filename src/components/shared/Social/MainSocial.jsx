import React from 'react';
import { Link } from 'react-router-dom';

// img
import gitHub from '../../../assets/svg/Github.svg'
import linkedin from '../../../assets/svg/Linkedin.svg'
import twitter from '../../../assets/svg/Twitter.svg'

const MainSocial = ({rowCol, spaceBettwen}) => {
    return (
        // flex-col - flex-row - mt - mx ba tavajo be niaz project az mehvar haye x y estefade shavad
        <div className={`flex items-center ${rowCol}`}>
            <Link to='https://github.com/amirhpy/' target='_blank' className='group'>
                <img src={gitHub} alt='github' className='transform hover:rotate-45 transition-all duration-500' />
            </Link>
            <Link to='/' target='_blank' className={`group ${spaceBettwen}`}>
                <img src={twitter} alt='twitter' className='transform hover:rotate-45 transition-all duration-500' />
            </Link>
            <Link to='https://www.linkedin.com/in/amirhosseinpour/' target='_blank' className='group'>
                <img src={linkedin} alt='linkedin' className='transform hover:rotate-45 transition-all duration-500' />
            </Link>
        </div>
    );
};

export default MainSocial;