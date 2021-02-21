import React from 'react';
import Cookie from 'js-cookie';
import classNames from 'classnames';
import TurnedInIcon from '@material-ui/icons/TurnedIn';

import cls from './TestQuestion.module.css';
import TestAnswer from '../TestAnswer/TestAnswer';


const TestQuestion = ({ id, question, hint,  answers, mapWithAnswers }) => {
    
    const [ saveQuestion, setSaveQuestion ] = React.useState(null);
    const [ showHintQuestion, setShowHintQuestion ] = React.useState(false);
    const [ activeAnswer, setActiveAnswer ] = React.useState(new Map(mapWithAnswers));

    const onSetActiveAnswer = (answerId) => {
        setActiveAnswer(new Map(mapWithAnswers.set(id, answerId)));
        Cookie.set('answers', Array.from(mapWithAnswers));
    }

    const onSaveQuestion = (questionId) => {
        if (saveQuestion) {
            setSaveQuestion(prev => null);
        }
        else {
            setSaveQuestion(questionId);
        }
    }

    const onShowOrHideHint = () => {
        setShowHintQuestion(prev => !prev);
    }


    return (
        <div className = {cls.ques}>
            <div className = {cls.ques__header}>
                <div className = {cls.ques__title}> Вопрос #1 </div>
                <div onClick = {() => onSaveQuestion(id)}>
                    <TurnedInIcon className = {classNames(cls.ques__save, {[cls.active]: saveQuestion !== null})} />
                </div>
            </div>

            <div className = {cls.ques__text}> { question } </div>

            <fieldset className = {cls.answers}>
                { answers.map((item, index) => {
                    return <TestAnswer 
                        key = { index } 

                        activeAnswer = { activeAnswer }
                        onSetActiveAnswer = { onSetActiveAnswer }
                        group_id = { id }
                        answer_id = { item.id }
                        answer = { item.answer } 
                        
                        />
                })}
            </fieldset>

            <div className = {cls.ques__hint} onClick = {onShowOrHideHint}> {showHintQuestion ? <span> Cкрыть подсказку </span>:<span>Показать подсказку</span>} </div>
            <div className = {classNames(cls.hint_text, {[cls.hintActive]: showHintQuestion})} > { hint } </div>

            
        </div>
    )
}

export default TestQuestion;