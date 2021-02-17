import React from 'react';
import classNames from 'classnames';

import arrow from '../../../../assets/detail/arrow.svg';
import cls from './CategoriesByTheme.module.css';
import SubCategories from '../SubCategories/SubCategories';


const CategoriesByTheme = ({ index, count, title, items, showCategories, onChangeShowCategories }) => {

    const isValid = index === showCategories;

    return (
        <div className = {cls.bottom__border}>
            <div className = {cls.categories} onClick = {() => onChangeShowCategories(index)}>
                <div className = {cls.categories__flex}>
                    <div className = {cls.categories__theme}> { title } </div>
                    <div className = { cls.categories__counts }> { count } </div>
                </div>
                <img src = { arrow } alt = "" className = {classNames(cls.categories__image, {
                    [cls.active]: isValid
                })}/>
                
            </div>  
            {isValid && <SubCategories items = { items }/> } 
        </div>
    )
}
export default CategoriesByTheme;

