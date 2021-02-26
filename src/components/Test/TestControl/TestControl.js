import React from 'react';
import classNames from 'classnames';
import {  test } from '../../../data/control';
import TimerTest from './TimerTest/TimerTest';


import cls from './TestControl.module.css';
import ListOfSubject from './ListOfSubject/ListOfSubject';



const TestControl = ({ time, stopTimer, onStopTime, onFinishTestButton }) => {
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
                {test.map((item, index) => {
                    return <ListOfSubject 
                        key = { index } 
                        index = { index }
                        {...item} 
                        showListOfSubject = { showListOfSubject } 
                        onChangeSubjectList = { onChangeSubjectList }/> 
                })}
            </div>

            <button className = {cls.finish__button} onClick = { onFinishTestButton }> Завершить тестирование </button>
        </div>
    )
}

export default TestControl;