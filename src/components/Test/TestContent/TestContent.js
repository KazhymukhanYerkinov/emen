import React from 'react';
import MathJax from 'react-mathjax2';
import TestQuestion from './TestQuestion/TestQuestion';

import cls from './TestContent.module.css';







const TestContent = ({ TEST_QUESTIONS, mapWithAnswers, setMapWithAnswers }) => {
    
    return ( 
        <MathJax.Context>
        <div className = {cls.content}>
            { TEST_QUESTIONS[0].questions.map((item, index) => {
                return <TestQuestion 
                    key = { index } 
                    {...item} 
                    mapWithAnswers = { mapWithAnswers }
                    setMapWithAnswers = { setMapWithAnswers }
                />
            }) }
        </div>
        </MathJax.Context>
    )
}
export default TestContent;