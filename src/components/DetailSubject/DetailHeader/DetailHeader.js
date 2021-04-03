import React from 'react';

import cls from './DetailHeader.module.css';


const DetailHeader = ({ banner, BASE_URL, onHandleSettingsModal }) => {
    return (
        <div className = {cls.header} style = {{ backgroundColor: banner.color }}>
            <div className = {cls.header__inner}>
                <img className = {cls.header__image} src = { BASE_URL + "" + banner.logo } alt = "" />
                <div className = {cls.header__content}>
                    <div className = {cls.header__title}> {banner.name_ru} </div>
                    <div className = {cls.header__info}>
                        <button className = 'button button__over button__over--header' onClick = {() => onHandleSettingsModal(true) }> Начать новый тест </button>
                    </div> 
                </div>
                
            </div>
        </div>
    )
}

export default DetailHeader;