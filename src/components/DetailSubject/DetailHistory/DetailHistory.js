import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import arrow from '../../../assets/detail/arrow.svg';
import cls from './DetailHistory.module.css';


// Сабақтардың история компоненті ( сайдбар оң жақта )
const DetailHistory = (props) => {

    let hasHistory = true;

    if (props.history.length === 0) {
        hasHistory = false;
    }
    
    return (
        <div className = {cls.history}>
            <div className = {cls.history__title}> Тестілеу тарихы </div>
            <div className = {cls.history__desc}> Тестілеу тарихында сіздің нәтижелеріңіз сақталады.</div>
            {!hasHistory && <div className = {cls.history__desc}> У Вас пока нет истории тестирования </div>}

            <div className = {cls.history__content}>
                { props.history.map((item, index) => {
                    return (
                        <NavLink to = {`/history/${item.uuid}`} className = {cls.item} key = { index }>
                            
                            <div className = {cls.item__content}>
                                <div className = {cls.item__id}>  </div>
                                <img src = { props.BASE_URL + '' + item.subject.logo } alt = "" />
                                <div className = {cls.item__info}>
                                    <div className = {cls.item__name}> {item.subject.name_ru} </div>
                                    <div className = {cls.item__result}> Нәтиже: {item.score}/{item.total_score} </div>
                                </div>
                            </div>
                            <img className = {cls.item__image} src = { arrow } alt = ""/>
                        </NavLink>
                    )
                })}
            </div>

            {hasHistory && <Link to = '/history' className = 'button button__over'>
                Толық көрсету
            </Link>}

        </div>
    )
}

export default React.memo(DetailHistory);