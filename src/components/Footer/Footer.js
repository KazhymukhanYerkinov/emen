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
                            <div className = {cls.social__text}> Мы в соцсетях </div>
                            <div className = {cls.social__logo}>
                                <Link to = {'/instagram'}><img src = { insta } alt = ""/></Link>
                                <Link to = {'/facebook'}><img src = { face } alt = "" /></Link>
                            </div>
                        </div>

                        <div className = {cls.copyright}> &copy; 2021 ТОО «EMEN EDU» </div>
                    </div>

                    <div className = {cls.footer__links}>
                        <div className = {cls.row}>
                            <div className = {cls.row__title}> О платформе </div>
                            <Link className = {cls.row__link}> О проекте </Link>
                            <Link className = {cls.row__link}> Помощь </Link>
                            <Link className = {cls.row__link}> Отзывы </Link>
                            <Link className = {cls.row__link}> Вакансии </Link>
                        </div>

                        <div className = {cls.row}>
                            <div className = {cls.row__title}> Платформа </div>
                            <Link className = {cls.row__link}> Предметы </Link>
                            <Link className = {cls.row__link}> Подписка </Link>
                            <Link className = {cls.row__link}> Лицензия </Link>
                            <Link className = {cls.row__link}> Блог </Link>
                            <Link className = {cls.row__link}> Контакты </Link>
                        </div>

                        <div className = {cls.row}>
                            <div className = {cls.row__title}> Поддержка </div>
                            <Link className = {cls.row__link}> Пользовательское соглашение </Link>
                            <Link className = {cls.row__link}> Политика конфиденциальности </Link>
                        </div>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Footer;