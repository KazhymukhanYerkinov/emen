import React from 'react';
import classNames from 'classnames';

import arrow from '../../../../assets/detail/arrow.svg';
import cls from './CategoriesByTheme.module.css';
import SubCategories from '../SubCategories/SubCategories';


const CategoriesByTheme = ({ index, item, showCategories, onChangeShowCategories   }) => {

    const isValid = index === showCategories;

    return (
        <div className = {cls.bottom__border}>
            <div className = {cls.categories} onClick = {() => onChangeShowCategories(index)}>
                <div className = {cls.categories__flex}>
                    <div className = {cls.categories__theme}> {index + 1}. { item.name_ru } </div>
                    <div className = { cls.categories__counts }> <span className = {cls.result}> Решено: </span>{ item.solved_question_count } / { item.all_question_count } </div>
                </div>
                <img src = { arrow } alt = "" className = {classNames(cls.categories__image, {
                    [cls.active]: isValid
                })}/>
                
            </div>  
            {isValid && <SubCategories items = { item.categories }/> } 
        </div>
    )
}
export default CategoriesByTheme;

