import React from 'react';


import { test } from '../../../data/test';
import TestQuestion from './TestQuestion/TestQuestion';

import cls from './TestContent.module.css';







const TestContent = ({ mapWithAnswers, saveAnswersInCookie }) => {
    
    return (
        <div className = {cls.content}>
            { test.map((item, index) => {
                return <TestQuestion 
                    key = { index } 
                    {...item} 
                    mapWithAnswers = { mapWithAnswers }
                    saveAnswersInCookie = { saveAnswersInCookie }
                />
            }) }
        </div>
    )
}
export default TestContent;