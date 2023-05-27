import React from 'react';
import {categories} from "./CategoriesData"
import CategoriesBox from './CategoriesBox';
const Categories = () => {
    
    return (
        <div className='flex justify-between overflow-x-auto items-center flex-row pt-5'>
           {
           categories.map(item=> <CategoriesBox label={item.label} icon={item.icon} key={item.label}></CategoriesBox> )
           }
        </div>
    );
};

export default Categories;