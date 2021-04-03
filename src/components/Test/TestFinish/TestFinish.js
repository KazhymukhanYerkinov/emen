import React from 'react';

import cls from './TestFinish.module.css';


const TestFinish = ({ 
    onOnlyFinish, 
    handleFinishAllTest,
    completeQuestions,
    second,
    minute,
    hours,
    QUESTION_SIZE, }) => {
    return (
        <div className = {cls.finish}>
            <div className = {cls.finish__inner}>
                <div className = {cls.finish__title}> Вы уверены, что хотите завершить тестирование ? </div>
                <div className = {cls.finish__result}> Отвечено: {completeQuestions}/{QUESTION_SIZE} </div>
                <div className = {cls.finish__time}>  Осталось времени: {hours}:{minute}:{second} </div>

                <button className = 'button button__submit mt-10' onClick = { () => handleFinishAllTest(false) }> Да, завершить тестирование </button>
                <button className = 'button button__over mt-10' onClick = { onOnlyFinish }> Отмена </button>
            </div>
        </div>
    )
}

export default TestFinish;