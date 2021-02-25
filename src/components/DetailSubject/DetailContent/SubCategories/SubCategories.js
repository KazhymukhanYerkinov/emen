import React from 'react';
import classNames from 'classnames';

import cls from './SubCategories.module.css';



const SubCategories = ({ items }) => {

    const [ showSubCategories, setShowSubCategories ] = React.useState(null);
    React.useEffect(() => {
        return () => {
            setShowSubCategories(null);
        }
    },[])

    const onChangeSetSubCategories = (index) => {
        setShowSubCategories((prevIndex) => {
            if (prevIndex === index) {
                return null;
            }
            return index;
        })
    }


    
    return (
        <div className = {cls.base}>
            {items.map((item, index) => {
                return (
                    <div className = {classNames(cls.backcolor, {
                       [cls.select]: index === showSubCategories
                    })} onClick = {() => onChangeSetSubCategories(index)} key = { index }>
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