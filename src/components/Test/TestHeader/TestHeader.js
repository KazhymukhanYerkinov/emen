import React from 'react';
import cls from './TestHeader.module.css';


const TestHeader = ({ TEST_BANNER, BASE_URL }) => {
    return (
        <div className = {cls.header} style = {{ backgroundColor: TEST_BANNER.color }}>
            <div className = {cls.header__inner}>
                
                <img className = {cls.header__image} src = { BASE_URL + '' + TEST_BANNER.logo } alt = "" />

                <div className = {cls.header__content}>
                    <div className = {cls.header__title}> { TEST_BANNER.name_ru } </div>
                    <div className = {cls.header__desc}> Инструкция: из пяти предложенных вам вариантов ответов будут даны задания для выбора одного правильного ответа. После завершения работы нажмите кнопку «завершить тестирование». Система подсчитывает ваши ответы и показывает результаты. </div>
                </div>

            </div>
        </div>
    )
}

export default TestHeader;