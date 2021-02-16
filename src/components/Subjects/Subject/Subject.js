import React from 'react';
import { Link } from 'react-router-dom';
import cls from './Subject.module.css';


const Subject = ({ title, text, image, color }) => {
    return (
            <Link to = '/subjects/1' className = {cls.subject} style = {{ backgroundColor: `${color}` }}>
                <div className = {cls.subject__inner}>
                    <div className = {cls.content}>
                        <img src = { image } alt = "" className = {cls.image} />
                        <div className = {cls.subject__info}>
                            <div className = {cls.title}> { title } </div>
                            <div className = {cls.text}> { text } </div>
                        </div>

                    </div>

                    <div className = {cls.button}> Перейти </div>
                </div>
            </Link>
        
    )
}

export default Subject;