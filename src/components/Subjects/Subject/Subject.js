import React from 'react';
import { Link } from 'react-router-dom';
import cls from './Subject.module.css';


const Subject = ({ BASE_URL, language, item}) => {

    
    
    return (
            <Link to = {item.id === "full_unt" ? `/showTheme/${item.id}/ENT`:`/showTheme/${item.id}/SUBJECT`} className = {cls.subject} style = {{ backgroundColor: `${item.color}`}}>
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

                    <div className = 'button button__over button__over--none'> Перейти </div>
                </div>
            </Link>
    )
}

export default Subject;