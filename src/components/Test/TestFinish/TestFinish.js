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

                <button className = {cls.yes__finish} onClick = { () => handleFinishAllTest(false) }> Да, завершить тестирование </button>
                <button className = {cls.no__finish} onClick = { onOnlyFinish }> Отмена </button>
            </div>
        </div>
    )
}

export default TestFinish;