import React from 'react';



const SubCategories = ({ topicID, items, onHandleSettingsModal, index }) => {


    return (
        <div className = 'subcat' id = {`subcategories_smooth_${index}`}>

            <button className = 'button button__detail' onClick = {() => onHandleSettingsModal(true, topicID)}> Начать </button>
            {items.map((item, index) => {
                return (
                    <div className = 'subcat__color'  key = { index }>
                        <div className = 'subcat__inner'>
                            <div className = 'subcat__title'> { item.name_ru } </div>
                            <div className = 'subcat__count'> <span className = 'subcat__result'> Решено: </span>{ item.solved_question_count } / { item.all_question_count } </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default SubCategories;