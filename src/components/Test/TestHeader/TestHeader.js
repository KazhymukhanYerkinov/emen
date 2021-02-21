import React from 'react';
import ent from '../../../assets/subjects/ent.svg';

import cls from './TestHeader.module.css';


const TestHeader = () => {
    return (
        <div className = {cls.header}>
            <div className = {cls.header__inner}>
                
                <img className = {cls.header__image} src = { ent } alt = "" />

                <div className = {cls.header__content}>
                    <div className = {cls.header__title}> ЕНТ </div>
                    <div className = {cls.header__desc}> Инструкция: из пяти предложенных вам вариантов ответов будут даны задания для выбора одного правильного ответа. После завершения работы нажмите кнопку «завершить тестирование». Система подсчитывает ваши ответы и показывает результаты. </div>
                </div>

            </div>
        </div>
    )
}

export default TestHeader;