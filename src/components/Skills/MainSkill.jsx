import React from 'react';

const MainSkill = ({ headSkill, bodySkill }) => {
    return (
        <div className='border w-[49%] sm:w-44 border-gray'>
            <h4 className='border-b font-fira-600 p-2 border-gray text-white'>{headSkill}</h4>
            <p className='p-2'>{bodySkill}</p>
        </div>
    );
};

export default MainSkill;