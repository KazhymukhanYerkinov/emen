import React from 'react';
import TestQuestion from './TestQuestion/TestQuestion';

import cls from './TestContent.module.css';







const TestContent = ({ TEST_QUESTIONS, mapWithAnswers, setMapWithAnswers }) => {
    

    return ( 
        <div className = {cls.content}>
            { TEST_QUESTIONS[0].questions.map((item, index) => {
                return item.is_group ? 
                (
                    <div key = { index }>
                        <div className = {cls.group__text}> { item.group_text } </div>
                        {item.questions.map((question, uniqueKey) => {
                            return <TestQuestion
                                key = { uniqueKey }
                                {...question}
                                mapWithAnswers = { mapWithAnswers }
                                setMapWithAnswers = { setMapWithAnswers }
                            />
                        })}
                    </div>
                ):(
                <React.Fragment key = { index } >
                    <TestQuestion 
                        {...item}
                        mapWithAnswers = { mapWithAnswers }
                        setMapWithAnswers = { setMapWithAnswers }
                    />
                </React.Fragment>)
            }) }
        </div>
    )
}
export default TestContent;