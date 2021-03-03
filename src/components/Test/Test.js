import React from 'react';
import Cookie from 'js-cookie';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getQuestionThunk } from '../../redux/startTest-reducer';

import TestHeader from './TestHeader/TestHeader';
import TestContent from './TestContent/TestContent';
import TestControl from './TestControl/TestControl';
import TestPause from './TestPause/TestPause';
import Preloader from '../common/Preloader/Preloader';

import cls from './Test.module.css';




let mapWithAnswers;
let time;

const Test = ({ match, BASE_URL }) => {
    // Экзамен бастайтын UID код
    const examUID = match.params.examUID;

    const dispatch = useDispatch();
    const {data, isFetching } = useSelector(({ testPage }) => testPage);

    // Уақыт контрить ететін state
    const [ stopTimer, setStopTimer ] = React.useState(false);

    // Тест біту бітпеуін контрить ететін state
    const [ finishTest, setFinishTest ] = React.useState(false);

    // Тест пәндерін ауысатын жерін конрить ететін state
    const [ indexOfSub, setIndexOfSub ] = React.useState(0);

    

    // Серверден сұрақтарды алу
    React.useEffect(() => {
        dispatch(getQuestionThunk(examUID));
    }, [])

    // Толық бітпейінше көрсетілетін загрузка
    if (!data || isFetching) {
        return <Preloader />
    }
    console.log(data)
    const TEST_BANNER = data.variants[0].subject;
    const TEST_QUESTIONS = data.variants;
    const INDIVIDUAL_TEST = data.variants.length === 1;




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
                    <TestHeader
                        TEST_BANNER = { TEST_BANNER }
                        BASE_URL = { BASE_URL } /> 
                    <div className = {cls.test__content}>
                        <TestContent 
                            TEST_QUESTIONS = { TEST_QUESTIONS }
                            mapWithAnswers = { mapWithAnswers }/>
                        <TestControl 
                            BASE_URL = { BASE_URL }
                            TEST_QUESTIONS = { TEST_QUESTIONS }
                            INDIVIDUAL_TEST = { INDIVIDUAL_TEST }

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

export default  withRouter(Test);