import React from 'react';
import classNames from 'classnames'
import { Link } from 'react-router-dom';

import intro from '../../../assets/images/intro.jpg';
import start from '../../../assets/logos/start.svg';
import scroll from '../../../assets/logos/scroll.svg';

import cls from './Section1.module.css';

const Section1 = ({ language }) => {

    return (
        <div className = {cls.section}>
            <div className = "container">
                <div className = {cls.section__inner}>

                    <div className = {cls.section__content}>
                        <div className = {cls.section__title}> Онлайн платформа для подготовки к ЕНТ </div> 
                        <div className = {cls.section__text}> Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает. </div>
                        <div className = {cls.section__blocks}>
                            <Link to = {'/subjects'} className = {classNames('button', cls.start__button)}> Начать бесплатно </Link>
                            <div className = {cls.start__video}> <img src = { start } alt = "Start video button"/>  <div className = {cls.video__text}>Посмотреть видео</div> </div>
                        </div>
                    </div>

                    <div className = {cls.section__image}>
                        <img className = {cls.image} src = { intro } alt = ""/>
                    </div>
                    
                    <div className = {cls.scroll}>
                        <img src = { scroll } alt = ""/>
                    </div>

                </div>

                
            </div>
        </div>
    )
}   

export default Section1;