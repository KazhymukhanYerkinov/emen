import React from 'react';
import classNames from 'classnames';

import cls from './MultipleAnswer.module.css';



const MultipleAnswer = ({ question_id, answer_text, answer_id,  onSetActiveAnswer, hasAnswer }) => {

    let isChecked = false;

    if (hasAnswer(question_id, answer_id)) {
        isChecked = true;
    }
    

    return (
        <div className = {classNames(cls.answer, {[cls.active]: isChecked})} onClick = {() => onSetActiveAnswer(answer_id)}>
            <div id = {`answer_${answer_id}`} className = {cls.answer__text}> { answer_text } </div>
            <input readOnly type="checkbox" value = {`value_${answer_id}`} checked = { isChecked }/>
        </div>
    )
}

export default MultipleAnswer;