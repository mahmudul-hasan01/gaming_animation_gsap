import React from 'react';

const Button = ({id, title, leftIcon, containerClass}) => {
    return (
        <button id={id} className={`group relative z-10 w-fit cursor-pointer
        
         overflow-hidden rounded-full bg-[#ECFE69] px-7 py-3 text-black ${containerClass}`}>
            {leftIcon}
            <span className='relative incline-flex overflow-hidden text-sm uppercase '>
                <div>
                    {title}
                </div>
            </span>
        </button>
    );
};

export default Button;