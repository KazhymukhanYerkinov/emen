import React from 'react';
import classNames from 'classnames'
import { Link } from 'react-router-dom';
import * as axios from 'axios';

import intro from '../../../assets/images/intro.jpg';
import start from '../../../assets/logos/start.svg';
import scroll from '../../../assets/logos/scroll.svg';

import cls from './Section1.module.css';

const Section1 = () => {

    const  buttonWithGoogle = async () => {
        console.log("dasdasdas0");
        const dat = await axios.get('http://185.146.3.44/api/v1/auth/o/google-oauth2/?redirect_uri=/');
        window.location.replace(dat.data.authorization_url);

    }

    return (
        <div className = {cls.section}>
            <div className = "container">
                <div className = {cls.section__inner}>

                    <div className = {cls.section__content}>
                        <div className = {cls.section__title}> Онлайн платформа для подготовки к ЕНТ </div>
                        <div className = {cls.section__text}> Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает. </div>
                        <div className = {cls.section__blocks}>
                            <Link to = {'/'} className = {classNames('button', cls.start__button)} onClick = { buttonWithGoogle }> Начать бесплатно </Link>
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