import React from 'react';
import classNames from 'classnames';

import cls from './SubCategories.module.css';



const SubCategories = ({ topicID, items, onHandleSettingsModal }) => {
    return (
        <div className = {cls.base}>

            <button className = {cls.start} onClick = {() => onHandleSettingsModal(true, topicID)}> Начать </button>
            {items.map((item, index) => {
                return (
                    <div className = {classNames(cls.backcolor)}  key = { index }>
                        <div className = {cls.subcategories}>
                            <div className = { cls.sub__title }> { item.name_ru } </div>
                            <div className = { cls.sub__count }> <span className = {cls.result}> Решено: </span>{ item.solved_question_count } / { item.all_question_count } </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default SubCategories;