import React from 'react';
import TimerTest from './TimerTest/TimerTest';

import cls from './TestControl.module.css';



const TestControl = ({ time, stopTimer, onStopTime }) => {
    

    return (
        <div className = {cls.control}>
            <TimerTest stopTimer = { stopTimer } timer = { time } onStopTime = { onStopTime }/>
        </div>
    )
}

export default TestControl;