import React from 'react';


import { test } from '../../../data/test';
import TestQuestion from './TestQuestion/TestQuestion';

import cls from './TestContent.module.css';







const TestContent = ({ mapWithAnswers }) => {
    
    return (
        <div className = {cls.content}>
            { test.map((item, index) => {
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