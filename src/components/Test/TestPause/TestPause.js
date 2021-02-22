import React from 'react';
import pause from '../../../assets/images/pause.jpg';

import cls from './TestPause.module.css';


const TestPause = ({ time, onStopTime, mapWithAnswers }) => {

    let second = ('0' + Math.floor(time % 60)).slice(-2);
    let minute = ('0' + Math.floor((time % 3600) / 60 )).slice(-2);
    let hours = ('0' + Math.floor(time / 3600)).slice(-2);

    return (
        <div className = {cls.pause}>
            <img className = {cls.pause__iamge} src = { pause } alt = "" />

            <div className = {cls.pause__info}>
                <div className = {cls.pause__text}> Тест приостановлен </div>
                <div className = {cls.pause__result}> Отвечено: {mapWithAnswers.size}/140 </div>
                <div className = {cls.pause__timer}> Осталось времени: {hours}:{minute}:{second} </div>
            </div>
            <button className = {cls.pause__re} onClick = { onStopTime }> Возобновить тестирование </button>
            <button className = {cls.pause__finish}> Завершить тестирование </button>
        </div>
    )
}

export default TestPause;