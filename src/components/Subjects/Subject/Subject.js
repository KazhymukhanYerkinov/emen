import React from 'react';
import { Link } from 'react-router-dom';
import cls from './Subject.module.css';


const Subject = ({ title, text, image }) => {
    return (
        <div className = {cls.subject}>
            <div className = {cls.subject__inner}>
                <div className = {cls.content}>
                    <img src = { image } alt = "" className = {cls.image} />
                    <div className = {cls.title}> { title } </div>
                    <div className = {cls.text}> { text } </div>

                </div>

                <Link to = {`/subject`} className = {cls.button}> Перейти </Link>
            </div>
        </div>
    )
}

export default Subject;