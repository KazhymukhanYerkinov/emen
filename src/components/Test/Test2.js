import React from 'react';
import Cookie from 'js-cookie';
import smoothscroll from 'smoothscroll-polyfill';
import { withRouter } from 'react-router-dom';



import TestHeader from './TestHeader/TestHeader';
import TestContent from './TestContent/TestContent';
import TestControl from './TestControl/TestControl';
import TestPause from './TestPause/TestPause';


import cls from './Test.module.css';


let time;
smoothscroll.polyfill()

const Test = ({ data, errorsStartTests, examUID, BASE_URL, ...props }) => {

  if (Cookie.get('timer')) {
    time = Cookie.get('timer');
  }
  else {
    time = props.LEFT_TIME;
    Cookie.set('timer', time);
  }
  
  return (
    <div className={cls.test}>
      {props.stop_timer ?
        <TestPause
          examUID = { examUID }
          LEFT_TIME={ props.LEFT_TIME }
          QUESTION_SIZE={ props.QUESTION_SIZE }

          time={ time }
          finishAllTest={ props.finish_all_test }
          openFinishModal={ props.open_finish_modal }
          mapWithAnswers={ props.map_with_answers }

          handleFinishAllTest = { props.finishTest }
          onStopTime={ props.handleStopTimer }
          onOnlyFinish={ props.handleShowCloseModal }
          onFinishTestButton={ props.handleShowModal } /> :

        <div className='container'>
          <TestHeader
            TEST_BANNER={props.TEST_BANNER}
            BASE_URL={BASE_URL} />

          <div className={cls.test__content}>
            <TestContent
              TEST_QUESTIONS={props.TEST_QUESTIONS}
              setMapWithAnswers={props.saveQuestionWithMap}
              hasAnswer = { props.hasAnswer } />

            <TestControl
              BASE_URL={BASE_URL}
              TEST_QUESTIONS={props.TEST_QUESTIONS}
              mapWithAnswers={ props.map_with_answers }

              time = {time}

              stopTimer = { props.stop_timer }
              onStopTime = {props.handleStopTimer}

              onFinishTestButton = { props.handleShowModal }
              handleFinishAllTest = { props.finishTest }
              saveQuestion = { props.saveQuestion } />
          </div>
        </div>
      }
    </div>
  )
}

export default withRouter(Test);