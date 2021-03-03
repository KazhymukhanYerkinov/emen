import React from 'react';
import classNames from 'classnames';

import cls from './MultipleAnswer.module.css';



const MultipleAnswer = ({ answer_text, answer_id, question_id,  activeAnswer,  onSetActiveAnswer }) => {

    const listOfAnswers = activeAnswer.get(question_id);
    const isChecked = listOfAnswers ? listOfAnswers.includes(answer_id) : false;

    return (
        <div className = {classNames(cls.answer, {[cls.active]: isChecked})} onClick = {() => onSetActiveAnswer(answer_id)}>
            <div className = {cls.answer__text}> { answer_text } </div>
            <input readOnly type="checkbox" value = {`value_${answer_id}`} checked = { isChecked }/>
        </div>
    )
}

export default MultipleAnswer;