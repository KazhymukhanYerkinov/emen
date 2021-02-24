import React from 'react';
import { Link } from 'react-router-dom';

import setting from '../../../assets/logos/settings.svg';

import cls from './DetailHeader.module.css';


const DetailHeader = ({ banner, onChangeShowSettingsModal, BASE_URL }) => {
    return (
        <div className = {cls.header} style = {{ backgroundColor: banner.color }}>
            <div className = {cls.header__inner}>
                <img className = {cls.header__image} src = { BASE_URL + "" + banner.logo } alt = "" />
                <div className = {cls.header__content}>
                    <div className = {cls.header__title}> {banner.name_ru} </div>
                    <div className = {cls.header__info}>
                        <Link to = {`/start`} className = {cls.header__start__button}> Начать новый тест </Link>
                        <div className = {cls.header__setting__button} onClick = {() => onChangeShowSettingsModal(true)}>
                            <img src = { setting } alt = "" />
                            <div className = {cls.setting__text}> Настройки тестирования </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailHeader;