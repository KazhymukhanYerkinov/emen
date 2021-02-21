import React from 'react';
import Cookie from 'js-cookie';

import TestHeader from './TestHeader/TestHeader';
import TestContent from './TestContent/TestContent';


import cls from './Test.module.css';



let mapWithAnswers;

const Test = () => {

    if (Cookie.get('answers')) {
        mapWithAnswers = new Map(JSON.parse(Cookie.get('answers')));
    }
    else {
        mapWithAnswers = new Map();
    }

    const saveAnswersInCookie = (key, value) => {
        console.log(key,value);
    }

    return (
        <div className = {cls.test}>
            <div className = 'container'>
                <TestHeader />

                <div className = {cls.test__content}>
                    <TestContent 
                        mapWithAnswers = { mapWithAnswers }
                        saveAnswersInCookie = { saveAnswersInCookie }
                    />
                </div>
            </div>
        </div>
    )
}

export default Test;