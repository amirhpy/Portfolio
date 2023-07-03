import React from 'react';

const SoftSkill = ({skills}) => {
    return (
        <div className='border p-2 w-fit border-gray'>
            <p>{skills}</p>
        </div>
    );
};

export default SoftSkill;