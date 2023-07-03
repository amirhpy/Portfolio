import React from 'react';

const HeadPage = ({pageName, descPage}) => {
    return (
        <div>
            <h3 className='font-fira-600 text-white text-2xl sm:text-3xl'>
                <span className='text-primary'>/</span>
                {pageName}
            </h3>
            <p className='mt-1.5'>{descPage}</p>
        </div>
    );
};

export default HeadPage;