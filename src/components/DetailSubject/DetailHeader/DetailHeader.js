import React from 'react';
import { Link } from 'react-router-dom';

import math from '../../../assets/subjects/math.svg';
import setting from '../../../assets/logos/settings.svg';

import cls from './DetailHeader.module.css';


const DetailHeader = ({ onChangeShowSettingsModal }) => {
    return (
        <div className = {cls.header} style = {{ backgroundColor: '#8E96FF' }}>
            <div className = {cls.header__inner}>
                <img className = {cls.header__image} src = { math } alt = "" />
                <div className = {cls.header__content}>
                    <div className = {cls.header__title}> Математика </div>
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