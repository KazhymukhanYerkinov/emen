import React from 'react';
import Cookie from 'js-cookie';
import smoothscroll from 'smoothscroll-polyfill';
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
smoothscroll.polyfill()

const Test = ({ match, BASE_URL }) => {
    let requestEveryOneMinuteInterval;

    // Экзамен бастайтын UID код
    const examUID = match.params.examUID;

    const dispatch = useDispatch();
    const {data, isFetching } = useSelector(({ testPage }) => testPage);

    // Уақыт контрить ететін state
    const [ stopTimer, setStopTimer ] = React.useState(false);

    // Тест біту бітпеуін контрить ететін state
    const [ openFinishModal, setOpenFinishModal ] = React.useState(false);

    // Толық тестті бітіру
    const [ finishAllTest, setFinishAllTest ] = React.useState(false);

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

        requestEveryOneMinuteInterval = setInterval(() => {
            console.log(Cookie.get("answers"));
            console.log(Cookie.get("timer"));

        }, 2000)

        return () => {
            console.log("HERE")
            Cookie.remove('answers');
            Cookie.remove('timer'); 
            clearInterval(requestEveryOneMinuteInterval);
        }

    }, [])


    

    

    

    // Толық бітпейінше көрсетілетін загрузка
    if (!data || isFetching) {
        return <Preloader />
    }

    const LEFT_TIME = data.left_seconds;
    const TEST_BANNER = data.banner;
    const TEST_QUESTIONS = data.variants;
    const INDIVIDUAL_TEST = data.variants.length === 1;

    
    

    // Кукидің ішінде timer бар жоқ екенін тексереміз
    if (Cookie.get('timer')) {
        time = Cookie.get('timer');
    }
    else {
        time = LEFT_TIME;
        Cookie.set('timer', time, {expires: 1/5});
    }

    // Сұрақтарға ID бойынша smooth scroll жасау
    const handleScrollQuestionById = (question_id, navigateBySubId) => {
        if (navigateBySubId !== indexOfSub) {
            setIndexOfSub(navigateBySubId);
            return;
        }
        
        const targetElement = document.querySelector(`#scroll_${question_id}`);
        const rectTop = targetElement.getBoundingClientRect().top;
        const offsetTop = window.pageYOffset;

        const buffer = 90;
        const top = rectTop + offsetTop - buffer

        window.scrollTo({
            top,
            behavior: "smooth"
        })
    }

    // Уақытты тоқтату және қайттан бастауды басқаратын функция
    const handleStopTimer = () => {
        setStopTimer((prevIsStop) => !prevIsStop);
    }

    // Тестті аяқтау бетіне апару
    const onFinishTestButton = () => {
        handleStopTimer();
        setOpenFinishModal(true)
    }

    // Финиш модал окносын шығару
    const onOnlyFinish = () => {
        setOpenFinishModal((isFinish) => !isFinish);
    }


    // Толық бітіру
    const handleFinishAllTest = () => {
        Cookie.remove('answers');
        Cookie.remove('timer');

        for (let item of mapWithAnswers.entries()) {
            console.log(item[0], item[1])
        }

        onOnlyFinish();
        setFinishAllTest(true);
    }


    return (
        <div className = {cls.test}>
            {stopTimer ?
            <TestPause 
                time = { time } 
                mapWithAnswers = { mapWithAnswers } 
                finishAllTest = { finishAllTest }
                handleFinishAllTest = { handleFinishAllTest }

                onStopTime = { handleStopTimer }
                openFinishModal = { openFinishModal }
                onOnlyFinish = { onOnlyFinish }
                onFinishTestButton = { onFinishTestButton }/>:

                <div className = 'container'>
                    <TestHeader
                        TEST_BANNER = { TEST_BANNER }
                        BASE_URL = { BASE_URL } /> 
                    <div className = {cls.test__content}>
                        <TestContent 
                            TEST_QUESTIONS = { TEST_QUESTIONS }
                            indexOfSub = { indexOfSub }
                            requestEveryOneMinuteInterval = { requestEveryOneMinuteInterval }
                            mapWithAnswers = { mapWithAnswers }
                            setMapWithAnswers = { setMapWithAnswers }/>
                        <TestControl 
                            BASE_URL = { BASE_URL }
                            TEST_QUESTIONS = { TEST_QUESTIONS }
                            INDIVIDUAL_TEST = { INDIVIDUAL_TEST }
                            mapWithAnswers = { mapWithAnswers }

                            handleScrollQuestionById = { handleScrollQuestionById }

                            time = { time } 
                            stopTimer = { stopTimer } 
                            onStopTime = { handleStopTimer }
                            onFinishTestButton = { onFinishTestButton } />
                    </div> 
                </div>
            }
        </div>
    )
}

export default  withRouter(Test);