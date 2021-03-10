import React from 'react';
import pause from '../../../assets/images/pause.jpg';
import finish from '../../../assets/images/finish.jpg';

import TestFinish from '../TestFinish/TestFinish';

import cls from './TestPause.module.css';


const TestPause = ({ 
    time, 
    onStopTime, 
    finishAllTest, 
    handleFinishAllTest, 
    mapWithAnswers, 
    openFinishModal, 
    onOnlyFinish, 
    onFinishTestButton }) => {

    time = finishAllTest && 14400 - time;
    let second = ('0' + Math.floor(time % 60)).slice(-2);
    let minute = ('0' + Math.floor((time % 3600) / 60 )).slice(-2);
    let hours = ('0' + Math.floor(time / 3600)).slice(-2);

    return (
        <>  
            <div className = {cls.pause}>
                {openFinishModal && <TestFinish onFinishTestButton = { onFinishTestButton } onOnlyFinish = { onOnlyFinish } handleFinishAllTest = { handleFinishAllTest }/> }
                <img className = {cls.pause__iamge} src = {finishAllTest ? finish: pause } alt = "" />

                <div className = {cls.pause__info}>
                    <div className = {cls.pause__text}>{finishAllTest ? <span> Тест завершен </span>:<span>Тест приостановлен</span>} </div>
                    <div className = {cls.pause__result}> Отвечено: {mapWithAnswers.size}/140 </div>
                    <div className = {cls.pause__timer}> {finishAllTest ? <span> Потраченное время: </span>:<span>Осталось времени:</span>} {hours}:{minute}:{second} </div>
                </div>
                {finishAllTest ?
                <>
                    <button className = {cls.pause__re} onClick = { onStopTime }> Резултат тестирование </button>
                    <button className = {cls.pause__finish} onClick = { onOnlyFinish }> Главная страница </button>
                </>
                :
                <>
                    <button className = {cls.pause__re} onClick = { onStopTime }> Возобновить тестирование </button>
                    <button className = {cls.pause__finish} onClick = { onOnlyFinish }> Завершить тестирование </button>
                </>
                
                }
            </div>
            
        </>
    )
}

export default TestPause;