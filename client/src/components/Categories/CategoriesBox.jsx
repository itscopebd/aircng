import React from 'react';

const CategoriesBox = ({label, icon:Icon}) => {

    return (
        <div className='flex flex-col justify-center items-center gap-2 p-3 boder-b-2 hover:text-neutral-800 border-transparent text-neutral-500'>

            <Icon size={26}></Icon>
            <div className='text-sm font-medium'> {label} </div>
        </div>
    );
};

export default CategoriesBox;