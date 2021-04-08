import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';


import pause from '../../../assets/images/pause.jpg';
import finish from '../../../assets/images/finish.jpg';
import TestFinish from '../TestFinish/TestFinish';


import cls from './TestPause.module.css';



const TestPause = ({ 
    time,
    examUID,
    QUESTION_SIZE,
    LEFT_TIME,
    onStopTime, 
    finishAllTest, 
    handleFinishAllTest, 
    mapWithAnswers, 
    openFinishModal, 
    onOnlyFinish, 
    onFinishTestButton,
    handleClearAllData}) => {
    
    React.useEffect(() => {
        window.scrollTo(0, 0);

        return () => {
            handleClearAllData()
        }

    }, [handleClearAllData])

    if (finishAllTest) {
        time = LEFT_TIME - time;
        Cookies.remove('timer');
    }
    const completeQuestions = mapWithAnswers.size;

    let second = ('0' + Math.floor(time % 60)).slice(-2);
    let minute = ('0' + Math.floor((time % 3600) / 60 )).slice(-2);
    let hours = ('0' + Math.floor(time / 3600)).slice(-2);


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
                        handleFinishAllTest = { handleFinishAllTest }
                        /> }
                <img className = {cls.pause__iamge} src = {finishAllTest ? finish: pause } alt = "" />

                <div className = {cls.pause__info}>
                    <div className = {cls.pause__text}>{finishAllTest ? <span> Тест завершен </span>:<span>Тест приостановлен</span>} </div>
                    <div className = {cls.pause__result}> Отвечено: { completeQuestions }/{QUESTION_SIZE} </div>
                    <div className = {cls.pause__timer}> {finishAllTest ? <span> Потраченное время: </span>:<span>Осталось времени:</span>} {hours}:{minute}:{second} </div>
                </div>
                {finishAllTest ?
                <>
                    <Link className = 'button button__submit' to = {`/history/${examUID}`} onClick = { handleClearAllData }> Резултат тестирование </Link>
                    <Link className = 'button button__over mt-5' to = {'/'} onClick = { handleClearAllData }> Главная страница </Link>
                </>
                :
                <>
                    <button className = 'button button__submit' onClick = { () => onStopTime(false) }> Возобновить тестирование </button>
                    <button className = 'button button__over mt-5' onClick = { onOnlyFinish }> Завершить тестирование </button>
                </>
                }
            </div>

    )
}

export default TestPause;