import React from 'react';
import Cookie from 'js-cookie'
import cls from './TestFinish.module.css';


const TestFinish = ({ 
    onOnlyFinish, 
    handleFinishAllTest,
    completeQuestions,
    second,
    minute,
    hours,
    QUESTION_SIZE,
     }) => {

    
    
    let time;
    if (Cookie.get("timer")) {
        time = Cookie.get("timer");
    }

    return (
        <div className = {cls.finish}>
            <div className = {cls.finish__inner}>
                <div className = {cls.finish__title}> Вы уверены, что хотите завершить тестирование ? </div>
                <div className = {cls.finish__result}> Отвечено: {completeQuestions}/{QUESTION_SIZE} </div>
                <div className = {cls.finish__time}>  Осталось времени: {hours}:{minute}:{second} </div>

                <button className = 'button button__submit mt-10' onClick = { () => handleFinishAllTest(false, time) }> Да, завершить тестирование </button>
                <button className = 'button button__over mt-10' onClick = { onOnlyFinish }> Отмена </button>
            </div>
        </div>
    )
}

export default TestFinish;