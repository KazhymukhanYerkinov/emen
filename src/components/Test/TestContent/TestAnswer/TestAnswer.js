import React from 'react';
import classNames from 'classnames';
import cls from './TestAnswer.module.css';


const TestAnswer = ({ activeAnswer, question_id, answer_text, answer_id, onSetActiveAnswer }) => {


    const isChecked =  activeAnswer.get(question_id) === answer_id;

    return (
        <div className = {classNames(cls.answer, {[cls.active]: isChecked })} onClick = {() => onSetActiveAnswer(answer_id)}>
            <div className = {cls.answer__text}> { answer_text }  </div>
            <input readOnly type="radio" name={`value_${question_id}`} value={`value`} checked = { isChecked } />
        </div>
    )
}

export default TestAnswer;