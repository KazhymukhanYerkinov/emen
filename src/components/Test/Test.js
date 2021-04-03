import React from 'react';
import Cookie from 'js-cookie';
import smoothscroll from 'smoothscroll-polyfill';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getQuestionThunk, saveTestQuestionThunk, finishAllTestThunk, setShowErrorAC, setQuestionsFailAC } from '../../redux/startTest-reducer';

import TestHeader from './TestHeader/TestHeader';
import TestContent from './TestContent/TestContent';
import TestControl from './TestControl/TestControl';
import TestPause from './TestPause/TestPause';
import Preloader from '../common/Preloader/Preloader';
import Modal from '../common/Modal/Modal';

import cls from './Test.module.css';


let time;
let requestEveryOneMinuteInterval;
smoothscroll.polyfill()

const Test = ({ match, BASE_URL }) => {


  // Экзамен бастайтын UID код
  const examUID = match.params.examUID;

  const dispatch = useDispatch();
  const { data, isFetching, errorsStartTests } = useSelector(({ testPage }) => testPage);

  // Уақыт контрить ететін state
  const [stopTimer, setStopTimer] = React.useState(false);

  // Тест біту бітпеуін контрить ететін state
  const [openFinishModal, setOpenFinishModal] = React.useState(false);

  // Толық тестті бітіру
  const [finishAllTest, setFinishAllTest] = React.useState(false);

  // Тест пәндерін ауысатын жерін конрить ететін state
  const [indexOfSub, setIndexOfSub] = React.useState(0);

  // Сұрақтарды сақтайтын мапқа сақтау
  const [mapWithAnswers, setMapWithAnswers] = React.useState(new Map());



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
      let student_answers = [];;
      if (Cookie.get("answers")) {
        const answers = JSON.parse(Cookie.get("answers"));
        for (let i = 0; i < answers.length; i++) {
          let ans;

          if (Array.isArray(answers[i][1].answer)) {
            ans = [...answers[i][1].answer];
          }
          else {
            ans = answers[i][1].answer;
          }

          let body = {
            question: answers[i][0],
            answers: ans,
            variant: answers[i][1].variant,
          }

          student_answers.push(body);
        }
        let is_paused;
        let left_time = 14400;


        if (Cookie.get("stopTime") === undefined) {
          is_paused = false;
        }
        else {
          is_paused = Cookie.get("stopTime");
        }


        if (Cookie.get("timer")) {
          left_time = Cookie.get("timer");
        }

        dispatch(saveTestQuestionThunk(examUID, left_time, is_paused, student_answers));

      }
    }, 240000);

    return () => {
      Cookie.remove('answers');
      Cookie.remove('timer');
      Cookie.remove("stopTime");

      dispatch(setQuestionsFailAC());
      clearInterval(requestEveryOneMinuteInterval);
    }

  }, [examUID, dispatch])

  console.log(Cookie.get('answers'))
  
  React.useEffect(() => {
    if (data) {
      let mapAnswered = new Map();
      let varinatsData = data.variants;

      
      for (let i = 0; i < varinatsData.length; i++) {
        // Пән ішіндегі сұратарды аламыз
        let questionsData = varinatsData[i].questions;

        // Пән uuid кодын аламыз
        let uuid = varinatsData[i].uuid;

        for (let j = 0; j < questionsData.length; j++) {
          // Сұрақтың is_group екенін аламыз
          let is_group = questionsData[j].is_group;

          // Сұрақтың id аламыз
          let quesID = questionsData[j].id;

          if (is_group) {
            let groupQuestion = questionsData[j].questions;

            for (let k = 0; k < groupQuestion.length; k++) {

              // Сұрақтың жауаптарын аламыз
              let answersData = groupQuestion[k].answers

              let groupQuesId = groupQuestion[k].id

              // Жауаптарды сақтайтын лист создать етеміз
              let answersList = [];
              let isSave = false;

              for (let l = 0; l < answersData.length; l++) {
                if (answersData[l].is_answered) {
                  answersList.push(answersData[l].id);
                  isSave = true;
                }
              }

              if (isSave) {
                // Сұрақтың объект жасаймыз
                let body = {
                  question: groupQuesId,
                  answer: answersList,
                  variant: uuid,
                }

                mapAnswered.set(groupQuesId, body);
              }
            }
          }
          else {
            // Сұрақтың жауаптарын аламыз
            let answersData = questionsData[j].answers;

            // Жауаптарды сақтайтын лист создать етеміз
            let answersList = [];
            let isSave = false;

            for (let k = 0; k < answersData.length; k++) {
              if (answersData[k].is_answered) {
                answersList.push(answersData[k].id);
                isSave = true;
              }
            }

            if (isSave) {
              // Сұрақтың объект жасаймыз
              let body = {
                question: quesID,
                answer: answersList,
                variant: uuid,
              }

              mapAnswered.set(quesID, body);
            }
          }

        }
      }

      setMapWithAnswers(new Map(mapAnswered));
    }


  }, [data])

  const handleShowError = () => {
    dispatch(setShowErrorAC());
  }

  if (errorsStartTests.showError) {
    return <Modal duringTheTest errorsStartTests={errorsStartTests} handleCloseModal={handleShowError} />
  }
  // Толық бітпейінше көрсетілетін загрузка
  if (!data || isFetching) {
    return <Preloader />
  }




  const LEFT_TIME = data.left_seconds;
  const TEST_BANNER = data.banner;
  const TEST_QUESTIONS = data.variants;
  const INDIVIDUAL_TEST = data.variants.length === 1;
  let QUESTION_SIZE = 140;

  if (INDIVIDUAL_TEST) {
    QUESTION_SIZE = data.variants[0].questions_count;
  }



  // Кукидің ішінде timer бар жоқ екенін тексереміз
  if (Cookie.get('timer')) {
    time = Cookie.get('timer');
  }
  else {
    time = LEFT_TIME;
    Cookie.set('timer', time);
  }


  

  // Уақытты тоқтату және қайттан бастауды басқаратын функция
  const handleStopTimer = (isType = false) => {
    setStopTimer((prevIsStop) => {
      if (isType) {
        Cookie.set("stopTime", true);
        return true;
      }
      else {
        Cookie.set("stopTime", !prevIsStop);
        return !prevIsStop;
      }

    });
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
  const handleFinishAllTest = (isType) => {


    clearInterval(requestEveryOneMinuteInterval);

    let student_answers = [];

    for (let item of mapWithAnswers.entries()) {
      let ans;
      if (Array.isArray(item[1].answer)) {
        ans = [...item[1].answer]
      }
      else {
        ans = item[1].answer;
      }
      let body = {
        question: item[0],
        answers: ans,
        variant: item[1].variant,
      }
      student_answers.push(body);
    }

    let is_paused;
    let left_time = 14400;


    if (Cookie.get("stopTime") === undefined) {
      is_paused = false;
    }
    else {
      is_paused = Cookie.get("stopTime");
    }

    if (Cookie.get("timer")) {
      left_time = Cookie.get("timer");
    }

    Cookie.remove('answers');
    Cookie.remove('stopTime');

    dispatch(finishAllTestThunk(examUID, left_time, is_paused, student_answers));

    if (!isType) {
      onOnlyFinish();
    }

    handleStopTimer(true);
    setFinishAllTest(true);
  }

  // Тест бетті толық жапқан кезде
  const clearAllData = () => {
    dispatch(setQuestionsFailAC())
  }



  return (
    <div className={cls.test}>
      {stopTimer ?
        <TestPause
          examUID = { examUID }
          time={time}
          LEFT_TIME={LEFT_TIME}
          QUESTION_SIZE={QUESTION_SIZE}
          mapWithAnswers={mapWithAnswers}
          finishAllTest={finishAllTest}
          clearAllData = { clearAllData }
          handleFinishAllTest={handleFinishAllTest}

          onStopTime={handleStopTimer}
          openFinishModal={openFinishModal}
          onOnlyFinish={onOnlyFinish}
          onFinishTestButton={onFinishTestButton} /> :

        <div className='container'>
          <TestHeader
            TEST_BANNER={TEST_BANNER}
            BASE_URL={BASE_URL} />
          <div className={cls.test__content}>
            <TestContent
              TEST_QUESTIONS={TEST_QUESTIONS}
              indexOfSub={indexOfSub}
              requestEveryOneMinuteInterval={requestEveryOneMinuteInterval}
              mapWithAnswers={mapWithAnswers}
              setMapWithAnswers={setMapWithAnswers} />
            <TestControl
              indexOfSub = { indexOfSub }
              setIndexOfSub = { setIndexOfSub }

              BASE_URL={BASE_URL}
              TEST_QUESTIONS={TEST_QUESTIONS}
              INDIVIDUAL_TEST={INDIVIDUAL_TEST}
              mapWithAnswers={mapWithAnswers}
              handleFinishAllTest={handleFinishAllTest}

              time={time}
              stopTimer={stopTimer}
              onStopTime={handleStopTimer}
              onFinishTestButton={onFinishTestButton} />
          </div>
        </div>
      }
    </div>
  )
}

export default withRouter(Test);