import React from 'react';

const HeadComponent = ({ nameComponent, hidden, lineHidden }) => {
    return (
        <div className='flex justify-between items-center font-fira-500 text-white'>
            <div className='flex items-center'>
                <h3 className='text-2xl sm:text-3xl'><span className='text-primary'>#</span>{nameComponent}</h3>
                <div className={`h-px ml-4 hidden sm:block bg-primary ${lineHidden}`}></div>
                {/* width = w-36 lg:w-96 ghabel taghir ast */}
            </div>
            <p className={hidden}>View all ~~</p>
        </div>
    );
};

export default HeadComponent;