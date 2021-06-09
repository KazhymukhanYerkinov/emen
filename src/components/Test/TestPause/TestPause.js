import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';


import pause from '../../../assets/images/pause.jpg';
import finish from '../../../assets/images/finish.jpg';
import TestFinish from '../TestFinish/TestFinish';


import cls from './TestPause.module.css';



const TestPause = ({ 
    time,
    examUID,
    QUESTION_SIZE,
    FULL_EXAM_TIME,
    onStopTime, 
    finishAllTest, 
    handleFinishAllTest, 
    mapWithAnswers, 
    openFinishModal, 
    onOnlyFinish, 
    onFinishTestButton,
    handleClearAllData}) => {
    
    React.useEffect(() => {
        window.scrollTo(0, 0);

        return () => {
            if (finishAllTest) {
                handleClearAllData();
            }
        }
    }, [handleClearAllData, finishAllTest])

    if (finishAllTest) {
        time = FULL_EXAM_TIME - time;
        Cookies.remove('timer');
    }
    const completeQuestions = mapWithAnswers.size;

    let second = ('0' + Math.floor(time % 60)).slice(-2);
    let minute = ('0' + Math.floor((time % 3600) / 60 )).slice(-2);
    let hours = ('0' + Math.floor(time / 3600)).slice(-2);


    return (
            <div className = {cls.pause}>
                {openFinishModal 
                    && <TestFinish 
                        completeQuestions = { completeQuestions }
                        second = { second }
                        minute = { minute }
                        hours = { hours }

                        onFinishTestButton = { onFinishTestButton } 
                        QUESTION_SIZE = { QUESTION_SIZE }
                        onOnlyFinish = { onOnlyFinish } 
                        handleFinishAllTest = { handleFinishAllTest }
                        /> }
                <img className = {cls.pause__iamge} src = {finishAllTest ? finish: pause } alt = "" />

                <div className = {cls.pause__info}>
                    <div className = {cls.pause__text}>{finishAllTest ? <span> Тестілеу аяқталды </span>:<span>Тестілеу тоқтатылды</span>} </div>
                    <div className = {cls.pause__result}> Жауап берді: { completeQuestions }/{QUESTION_SIZE} </div>
                    <div className = {cls.pause__timer}> {finishAllTest ? <span> Өткізілген уақыт: </span>:<span>Қалған уақыт:</span>} {hours}:{minute}:{second} </div>
                </div>
                {finishAllTest ?
                <>
                    <Link className = 'button button__submit' to = {`/history/${examUID}`} onClick = { handleClearAllData }> Тестілеу нәтижесі </Link>
                    <Link className = 'button button__over mt-5' to = {'/'} onClick = { handleClearAllData }> Басты бет </Link>
                </>
                :
                <>
                    <button className = 'button button__submit' onClick = { () => onStopTime(false) }> Тестілеуді жалғастыру </button>
                    <button className = 'button button__over mt-5' onClick = { onOnlyFinish }> Тестілеуді аяқтау </button>
                </>
                }
            </div>

    )
}

export default TestPause;