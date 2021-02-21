import React from 'react';
import classNames from 'classnames';
import cls from './TestAnswer.module.css';


const TestAnswer = ({ activeAnswer, group_id, answer, answer_id, onSetActiveAnswer }) => {

    const isChecked =  activeAnswer.get(group_id) === answer_id;

    return (
        <div className = {classNames(cls.answer, {[cls.active]: isChecked })} onClick = {() => onSetActiveAnswer(answer_id)}>
            <div className = {cls.answer__text}> { answer } </div>
            <input readOnly type="radio" name={`value_${group_id}`} value={`value`} checked = { isChecked } />
        </div>
    )
}

export default TestAnswer;