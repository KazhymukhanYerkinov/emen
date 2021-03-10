import React from 'react';

import cls from './TestFinish.module.css';


const TestFinish = ({ onOnlyFinish, handleFinishAllTest }) => {
    return (
        <div className = {cls.finish}>
            <div className = {cls.finish__inner}>
                <div className = {cls.finish__title}> Вы уверены, что хотите завершить тестирование ? </div>
                <div className = {cls.finish__result}> Отвечено: 80/140 </div>
                <div className = {cls.finish__time}>  Осталось времени: 01:59:45 </div>

                <button className = {cls.yes__finish} onClick = { handleFinishAllTest }> Да, завершить тестирование </button>
                <button className = {cls.no__finish} onClick = { onOnlyFinish }> Отмена </button>
            </div>
        </div>
    )
}

export default TestFinish;