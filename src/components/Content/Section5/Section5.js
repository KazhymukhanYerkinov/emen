import React from 'react';
import { Link } from 'react-router-dom';

import section5 from '../../../assets/images/section5.jpg';

import cls from './Section5.module.css';


const Section5 = () => {
    return (
        <div className = {cls.section}>
            <div className = "container">
                <div className = {cls.section__inner}>

                    <div className = {cls.section__image}>
                        <img className = {cls.image} src = { section5 } alt = "" />
                    </div>

                    <div className = {cls.section__content}>
                        <div className = {cls.section__title}> Начни прямо сейчас готовится к ЕНТ </div>
                        <div className = {cls.section__text}> Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. </div>
                        <div className = "text__center">
                            <Link to = '/subjects' className = 'button button__start'> Начать бесплатно </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5;