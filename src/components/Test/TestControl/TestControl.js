import React from 'react';
import classNames from 'classnames';

import TimerTest from './TimerTest/TimerTest';
import ListOfSubject from './ListOfSubject/ListOfSubject';


import cls from './TestControl.module.css';




const TestControl = ({ 
    BASE_URL, 
    TEST_QUESTIONS, 
    INDIVIDUAL_TEST, 
    mapWithAnswers,  
    time, 
    stopTimer, 
    onStopTime, 
    onFinishTestButton,
    handleScrollQuestionById }) => {

    const [ showListOfSubject, setListOfSubject ] = React.useState(null);
    const [ compass, setCompass ] = React.useState(false);
    
    const handleCompassChange = () => {
        setCompass((prevCompass) => !prevCompass);
    }
    const onChangeSubjectList = (index) => {
        setListOfSubject((prevIndex) => {
            if (prevIndex === index) {
                return null;
            }
            return index;
        })
    }

    return (
        <div className = {cls.control}>
            <TimerTest 
                stopTimer = { stopTimer } 
                timer = { time } 
                onStopTime = { onStopTime }
                handleCompassChange = { handleCompassChange }/>
            
            <div className = {classNames(cls.listOfSubject, {[cls.active]: compass})} >
                {TEST_QUESTIONS.map((item, index) => {
                    return <ListOfSubject
                        BASE_URL = { BASE_URL }
                        INDIVIDUAL_TEST = { INDIVIDUAL_TEST }
                        mapWithAnswers = { mapWithAnswers }

                        handleScrollQuestionById = { handleScrollQuestionById }

                        key = { index } 
                        index = { index }
                        questions = { item.questions }
                        subject = { item.subject } 
                        showListOfSubject = { showListOfSubject } 
                        onChangeSubjectList = { onChangeSubjectList }/> 
                })}
            </div>

            <button className = {cls.finish__button} onClick = { onFinishTestButton }> Завершить тестирование </button>
        </div>
    )
}

export default TestControl;