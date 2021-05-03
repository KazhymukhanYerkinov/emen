import React from 'react';
import classNames from 'classnames';
import cls from './TestAnswer.module.css';


const TestAnswer = ({ question_id, answer_text, answer_id, onSetActiveAnswer, hasAnswer }) => {
    
    let isChecked = false;

    if (hasAnswer(question_id, answer_id)) {
        isChecked = true;
    }


    return (
        <div className = {classNames(cls.answer, {[cls.active]: isChecked })} onClick = {() => onSetActiveAnswer(answer_id)}>
            <div id = {`answer_${answer_id}`} className = {cls.answer__text}> { answer_text } </div>
            <input readOnly type="radio" name={`value_${question_id}`} value={`value`} checked = { isChecked } />
        </div>
    )
}

export default TestAnswer;