import React from 'react';
import { Link } from 'react-router-dom';
import cls from './Subject.module.css';


const Subject = ({id, BASE_URL, language, item}) => {

    

    return (
            <Link to = {id === 0 ? `/detail/${id}/ent`:`/detail/${id}/subject`} className = {cls.subject} style = {{ backgroundColor: `${item.color}`}}>
                <div className = {cls.subject__inner}>
                    <div className = {cls.content}>
                        <img src = {BASE_URL + '' + item.logo} alt = "" className = {cls.image} />
                        <div className = {cls.subject__info}>
                            <div className = {cls.title}> { item[`name_${language}`] } </div>
                            {item[`description_${language}`] ? <div className = {cls.text}> { item[`description_${language}`] } </div>:
                            <>
                                <div className = {cls.text}> {item.variant_count} вариантов </div>
                                <div className = {cls.text}> {item.question_count} задач </div>
                            </>
                            }
                        </div>

                    </div>

                    <div className = {cls.button}> Перейти </div>
                </div>
            </Link>
    )
}

export default Subject;