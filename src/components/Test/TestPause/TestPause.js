import React from 'react';
import Cookie from 'js-cookie';
import pause from '../../../assets/images/pause.jpg';
import finish from '../../../assets/images/finish.jpg';

import TestFinish from '../TestFinish/TestFinish';


import cls from './TestPause.module.css';
import { Link } from 'react-router-dom';


const TestPause = ({ 
    time,
    QUESTION_SIZE,
    LEFT_TIME,
    onStopTime, 
    clearAllData,
    finishAllTest, 
    handleFinishAllTest, 
    mapWithAnswers, 
    openFinishModal, 
    onOnlyFinish, 
    onFinishTestButton }) => {
    
    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (finishAllTest) {
            Cookie.remove('timer');
        }

    }, [])

    if (finishAllTest) {
        time = LEFT_TIME - time;
    }
    const completeQuestions = mapWithAnswers.size;

    let second = ('0' + Math.floor(time % 60)).slice(-2);
    console.log(second);
    
    let minute = ('0' + Math.floor((time % 3600) / 60 )).slice(-2);
    console.log(minute);
    
    let hours = ('0' + Math.floor(time / 3600)).slice(-2);
    console.log(hours);

    return (
            <div className = {cls.pause}>
                {openFinishModal 
                    && <TestFinish 
                        completeQuestions = { completeQuestions }
                        second = { second }
                        minute = { minute }
                        hours = { hours }
                        onFinishTestButton = { onFinishTestButton } 
                        QUESTION_SIZE = { QUESTION_SIZE }
                        onOnlyFinish = { onOnlyFinish } 
                        handleFinishAllTest = { handleFinishAllTest }/> }
                <img className = {cls.pause__iamge} src = {finishAllTest ? finish: pause } alt = "" />

                <div className = {cls.pause__info}>
                    <div className = {cls.pause__text}>{finishAllTest ? <span> Тест завершен </span>:<span>Тест приостановлен</span>} </div>
                    <div className = {cls.pause__result}> Отвечено: { completeQuestions }/{QUESTION_SIZE} </div>
                    <div className = {cls.pause__timer}> {finishAllTest ? <span> Потраченное время: </span>:<span>Осталось времени:</span>} {hours}:{minute}:{second} </div>
                </div>
                {finishAllTest ?
                <>
                    <Link className = {cls.pause__re} to = {'/history'}> Резултат тестирование </Link>
                    <Link className = {cls.pause__finish} to = {'/'} onClick = { clearAllData }> Главная страница </Link>
                </>
                :
                <>
                    <button className = {cls.pause__re} onClick = { () => onStopTime(false) }> Возобновить тестирование </button>
                    <button className = {cls.pause__finish} onClick = { onOnlyFinish }> Завершить тестирование </button>
                </>
                }
            </div>

    )
}

export default TestPause;