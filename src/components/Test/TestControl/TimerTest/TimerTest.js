import React from 'react';
import Cookie from 'js-cookie'
import compas from '../../../../assets/logos/compas.svg';

import cls from './TimerTest.module.css';


let interval;

const TimerTest = ({ timer, stopTimer, onStopTime, handleCompassChange, onFinishTestButton, handleFinishAllTest, saveQuestion }) => {
    const [ time, setTime ] = React.useState(timer);
    
    if (stopTimer) {
        clearInterval(interval)
    }

    React.useEffect(() => {
        if (time <= 0) {
            clearInterval(interval); 
            handleFinishAllTest(true);
        }
        else if (time % 5 === 0) {
            saveQuestion();
        }

        
    })
    React.useEffect(() => {
        if (!stopTimer) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000)
        }
        return () => clearInterval(interval);
    }, [stopTimer]);

    Cookie.set('timer', time);
    let second = ('0' + Math.floor(time % 60)).slice(-2);
    let minute = ('0' + Math.floor((time % 3600) / 60 )).slice(-2);
    let hours = ('0' + Math.floor(time / 3600)).slice(-2);


    return (
        <div className = {cls.timer }>
            <div className = {cls.timer__title}> Контроль </div>

            <div className = {cls.time__display}>
                <div className = {cls.time__text}>
                    <span>{ hours }:</span>
                    <span>{ minute }:</span>
                    <span>{ second } </span>
                </div>

                <div className = {cls.time__stop} onClick = {onStopTime}>
                    <span className = {cls.button}></span>
                </div>

                <div className = {cls.compas} onClick = { handleCompassChange }>
                    <img  src = { compas } alt = "" />
                </div>

                <button className = 'button button__finish' onClick = { onFinishTestButton }> Завершить </button>
                
            </div>
            
        </div>
    )
}
export default TimerTest;