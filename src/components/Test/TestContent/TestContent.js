import React from 'react';
import TestQuestion from './TestQuestion/TestQuestion';

import cls from './TestContent.module.css';







const TestContent = ({ TEST_QUESTIONS, mapWithAnswers }) => {
    
    return ( 
        <div className = {cls.content}>
            { TEST_QUESTIONS[0].questions.map((item, index) => {
                return <TestQuestion 
                    key = { index } 
                    {...item} 
                    mapWithAnswers = { mapWithAnswers }
                />
            }) }
        </div>
    )
}
export default TestContent;