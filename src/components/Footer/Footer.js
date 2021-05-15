import React from 'react';

import insta from '../../assets/logos/instagram.svg';
import face from '../../assets/logos/facebook.svg'

import cls from './Footer.module.css';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className = {cls.footer}>
            <div className = 'container'>
                <div className = {cls.footer__inner}>

                    <div className = {cls.footer__social}>
                        <div className = {cls.social}>
                            <div className = {cls.social__text}> Біз әлеуметтік желілерде </div>
                            <div className = {cls.social__logo}>
                                <Link to = {'/instagram'}><img src = { insta } alt = ""/></Link>
                                <Link to = {'/facebook'}><img src = { face } alt = "" /></Link>
                            </div>
                        </div>

                        <div className = {cls.copyright}> &copy; 2021 ТОО «EMEN EDU» </div>
                    </div>

                    <div className = {cls.footer__links}>
                        <div className = {cls.row}>
                            <div className = {cls.row__title}> Платформа туралы </div>
                            <Link to = "/" className = {cls.row__link}> Проект туралы </Link>
                            <Link to = "/" className = {cls.row__link}> Көмек </Link>
                            <Link to = "/" className = {cls.row__link}> Пікірлер </Link>
                            <Link to = "/" className = {cls.row__link}> Вакансиялар </Link>
                        </div>

                        <div className = {cls.row}>
                            <div className = {cls.row__title}> Платформа </div>
                            <Link to = "/" className = {cls.row__link}> Пәндер </Link>
                            <Link to = "/" className = {cls.row__link}> Подписка </Link>
                            <Link to = "/" className = {cls.row__link}> Лицензия </Link>
                            <Link to = "/" className = {cls.row__link}> Блог </Link>
                            <Link to = "/" className = {cls.row__link}> Байланыстар </Link>
                        </div>

                        <div className = {cls.row}>
                            <div className = {cls.row__title}> Қолдау </div>
                            <Link to = "/" className = {cls.row__link}> Қолдану ережелері </Link>
                        </div>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Footer;