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





let time;
const ALL_QUESTIONS = [];
const BY_SUBJECT_QUESTIONS = [];



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

    // Сұрақтарды сақтайтын мапқа сақтау
    const [ mapWithAnswers, setMapWithAnswers ] = React.useState(new Map());

    

    // Серверден сұрақтарды алу
    React.useEffect(() => {
        
        

        dispatch(getQuestionThunk(examUID));

        if (Cookie.get('answers')) {
            setMapWithAnswers(new Map(JSON.parse(Cookie.get('answers'))));
        }
        else {
            setMapWithAnswers(new Map());
        }
    }, [])

    // React.useEffect(() => {
    //     if (data) {
    //         let variants = data.variants;
    //         for (let i = 0; i < variants.length; i++) {
    //             let questions = variants.questions;
    //             for (let j = 0; j < questions.length) {
                    
    //             }
    //         }
    //     }
    // }, [data]);

    // Толық бітпейінше көрсетілетін загрузка
    if (!data || isFetching) {
        return <Preloader />
    }

    console.log(data)
    const TEST_BANNER = data.banner;
    const TEST_QUESTIONS = data.variants;
    const INDIVIDUAL_TEST = data.variants.length === 1;




    // Кукидің ішінде answers бар жоғын тексереміз
    

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
                            mapWithAnswers = { mapWithAnswers }
                            setMapWithAnswers = { setMapWithAnswers }/>
                        <TestControl 
                            BASE_URL = { BASE_URL }
                            TEST_QUESTIONS = { TEST_QUESTIONS }
                            INDIVIDUAL_TEST = { INDIVIDUAL_TEST }
                            mapWithAnswers = { mapWithAnswers }

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