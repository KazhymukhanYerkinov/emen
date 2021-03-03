import React from 'react';
import Cookie from 'js-cookie';
import classNames from 'classnames';
import TurnedInIcon from '@material-ui/icons/TurnedIn';

import cls from './TestQuestion.module.css';
import TestAnswer from '../TestAnswer/TestAnswer';
import MultipleAnswer from '../MultipleAnswer/MultipleAnswer';


const TestQuestion = ({ id,is_group, numeration, answers, question_text, mapWithAnswers }) => {
    
    const [ saveQuestion, setSaveQuestion ] = React.useState(null);
    const [ showHintQuestion, setShowHintQuestion ] = React.useState(false);
    const [ activeAnswer, setActiveAnswer ] = React.useState(new Map(mapWithAnswers));
    

    const onSetActiveAnswer = (answerId) => {
        if (!is_group) {
            setActiveAnswer(new Map(mapWithAnswers.set(id, answerId)));
        }
        else {
            if (!mapWithAnswers.has(id)) {
                setActiveAnswer(new Map(mapWithAnswers.set(id, [answerId])));
            }
            else {
                let getAnswers = mapWithAnswers.get(id);
                setActiveAnswer(new Map(mapWithAnswers.set(id, [...getAnswers, answerId])));
            } 
        }
        Cookie.set('answers', Array.from(mapWithAnswers));  
    }

    const onSaveQuestion = (questionId) => {
        if (saveQuestion) {
            setSaveQuestion(null);
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
                <div className = {cls.ques__title}> Вопрос #{numeration} </div>
                <div onClick = {() => onSaveQuestion(id)}>
                    <TurnedInIcon className = {classNames(cls.ques__save, {[cls.active]: saveQuestion !== null})} />
                </div>
            </div>

            <div className = {cls.ques__text}> { question_text } </div>

            <fieldset className = {cls.answers}>
                {!is_group ? 
                    answers.map((item, index) => {
                        return <TestAnswer 
                            key = { index } 

                            answer_id = { item.id }
                            answer_text = { item.answer_text }

                            question_id = { id }
                            activeAnswer = { activeAnswer }
                            onSetActiveAnswer = { onSetActiveAnswer }    
                        />
                    }): 
                    answers.map((item, index) => {
                        return <MultipleAnswer
                                key = { index }

                                answer_id = { item.id }
                                answer_text = { item.answer_text }

                                question_id = { id }
                                activeAnswer = { activeAnswer }
                                onSetActiveAnswer = { onSetActiveAnswer }
                            />

                        
                    })}

                
            </fieldset>

            {/* <div className = {cls.ques__hint} onClick = {onShowOrHideHint}> {showHintQuestion ? <span> Cкрыть подсказку </span>:<span>Показать подсказку</span>} </div>
            <div className = {classNames(cls.hint_text, {[cls.hintActive]: showHintQuestion})} > { hint } </div> */}

            
        </div>
    )
}

export default TestQuestion;