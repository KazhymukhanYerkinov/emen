import React from 'react';
import { Link } from 'react-router-dom';

import arrow from '../../../assets/detail/arrow.svg';
import { data } from '../../../data/history.js';
import cls from './DetailHistory.module.css';


// Сабақтардың история компоненті ( сайдбар оң жақта )
const DetailHistory = () => {

    console.log('DETAIL HISTORY')
    
    return (
        <div className = {cls.history}>
            <div className = {cls.history__title}> История </div>
            <div className = {cls.history__desc}> В истории сохраняется ваши результаты тестирования </div>

            <div className = {cls.history__content}>
                { data.map((item, index) => {
                    return (
                        <div className = {cls.item} key = { index }>
                            
                            <div className = {cls.item__content}>
                                <div className = {cls.item__id}> {item.id}. </div>
                                <img src = { item.image } alt = "" />
                                <div className = {cls.item__info}>
                                    <div className = {cls.item__name}> {item.title} </div>
                                    <div className = {cls.item__result}> {item.results} </div>
                                </div>
                            </div>
                            <img className = {cls.item__image} src = { arrow } alt = ""/>
                        </div>
                    )
                })}
            </div>

            <Link to = '/hostory' className = {cls.button}>
                Показать еще
            </Link>

        </div>
    )
}

export default React.memo(DetailHistory);