import React from 'react';

// img
import quote from '../../assets/svg/quote.svg'

const Quote = () => {
    return (
        <div className='container'>
            <div className='w-fit mx-auto flex flex-col text-2xl relative text-white'>
                <img src={quote} alt='quote' className='absolute left-2 px-2 top-[-5%] bg-background' />
                <h3 className='font-fira-500 p-8 border border-gray'>With great power comes great electricity bill</h3>
                <p className='self-end p-4 border border-t-0 border-gray'>- Dr. Who</p>
                <img src={quote} alt='quote' className='absolute right-2 px-2 bottom-1/3 bg-background' />
            </div>
        </div>
    );
};

export default Quote;