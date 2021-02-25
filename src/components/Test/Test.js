import React from 'react';
import Cookie from 'js-cookie';

import TestHeader from './TestHeader/TestHeader';
import TestContent from './TestContent/TestContent';


import cls from './Test.module.css';
import TestControl from './TestControl/TestControl';
import TestPause from './TestPause/TestPause';
import TestFinish from './TestFinish/TestFinish';



let mapWithAnswers;
let time;

const Test = () => {
    
    const [ stopTimer, setStopTimer ] = React.useState(false);
    const [ finishTest, setFinishTest ] = React.useState(false);

    // Кукидің ішінде answers бар жоғын тексереміз
    if (Cookie.get('answers')) {
        mapWithAnswers = new Map(JSON.parse(Cookie.get('answers')));
    }
    else {
        mapWithAnswers = new Map();
    }

    // Кукидің ішінде timer бар жоқ екенін тексереміз
    if (Cookie.get('timer')) {
        time = Cookie.get('timer');
    }
    else {
        time = 14400;
        Cookie.set('timer', time, {expires: 1/5});
    }


    const onStopTime = () => {
        setStopTimer((prevIsStop) => !prevIsStop);
    }

    const onFinishTestButton = () => {
        onStopTime();
        setFinishTest(true)
        
    }
    const onOnlyFinish = () => {
        setFinishTest((isFinish) => !isFinish);
    }


    return (
        <div className = {cls.test}>
            {stopTimer ?
            <TestPause 
                time = { time } 
                mapWithAnswers = { mapWithAnswers } 
                onStopTime = { onStopTime }
                finishTest = { finishTest }
                onOnlyFinish = { onOnlyFinish }
                onFinishTestButton = { onFinishTestButton }/>:

                <div className = 'container'>
                    <TestHeader /> 
                    <div className = {cls.test__content}>
                        <TestContent mapWithAnswers = { mapWithAnswers }/>
                        <TestControl 
                            time = { time } 
                            stopTimer = { stopTimer } 
                            onStopTime = { onStopTime }
                            onFinishTestButton = { onFinishTestButton }/>
                    </div>
                    
                </div>
            }
        </div>
    )
}

export default Test;