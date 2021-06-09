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
                <div className = {cls.finish__title}> Сіз тестілеуді аяқтауға келісесіз ба? </div>
                <div className = {cls.finish__result}> Жауап берді: {completeQuestions}/{QUESTION_SIZE} </div>
                <div className = {cls.finish__time}>  Қалған уақыт: {hours}:{minute}:{second} </div>

                <button className = 'button button__submit mt-10' onClick = { () => handleFinishAllTest(false, time) }> Ия, тестілеуді аяқтау </button>
                <button className = 'button button__over mt-10' onClick = { onOnlyFinish }> Жоқ </button>
            </div>
        </div>
    )
}

export default TestFinish;