import React from 'react';
import classNames from 'classnames';
import cls from './TestAnswer.module.css';


const TestAnswer = ({ mapWithAnswers, question_id, answer_text, answer_id, onSetActiveAnswer }) => {

    React.useEffect(() => {
        document.getElementById(`answer_${answer_id}`).innerHTML = answer_text;
    }, [answer_id, answer_text])  

    let isChecked = false;
    if (mapWithAnswers.has(question_id)) {
        isChecked = (mapWithAnswers.get(question_id).answer.includes(answer_id));
    }


    return (
        <div className = {classNames(cls.answer, {[cls.active]: isChecked })} onClick = {() => onSetActiveAnswer(answer_id)}>
            <div id = {`answer_${answer_id}`} className = {cls.answer__text}> { answer_text } </div>
            <input readOnly type="radio" name={`value_${question_id}`} value={`value`} checked = { isChecked } />
        </div>
    )
}

export default TestAnswer;