import React from 'react';
import classNames from 'classnames';

import TimerTest from './TimerTest/TimerTest';
import ListOfSubject from './ListOfSubject/ListOfSubject';


import cls from './TestControl.module.css';




const TestControl = ({
  BASE_URL,
  TEST_QUESTIONS,
  mapWithAnswers,
  handleFinishAllTest,
  time,
  stopTimer,
  onStopTime,
  onFinishTestButton,
  saveQuestion,
  }) => {


  const [showListOfSubject, setListOfSubject] = React.useState(null);
  const [compass, setCompass] = React.useState(false);

  const handleCompassChange = () => {
    setCompass((prevCompass) => !prevCompass);
  }

  const onChangeSubjectList = (index) => {
    setListOfSubject((prevIndex) => {
      if (prevIndex === index) {
        return null;
      }
      return index;
    })
  }

  // Сұрақтарға ID бойынша smooth scroll жасау
  const handleScrollQuestionById = (question_id) => {
    
    const targetElement = document.querySelector(`#scroll_${question_id}`);
    const rectTop = targetElement.getBoundingClientRect().top;
    const offsetTop = window.pageYOffset;

    let buffer = 90;

    if (window.innerWidth <= 600) {
      buffer = 350;
    } 
    const top = rectTop + offsetTop - buffer;

    window.scrollTo({
      top,
      behavior: "smooth"
    })
    if (compass) setCompass(false);
  }



    return (
      <div className={cls.control}>
        <TimerTest
          stopTimer={stopTimer}
          timer={time}
          handleFinishAllTest={handleFinishAllTest}
          onStopTime={onStopTime}
          onFinishTestButton={onFinishTestButton}
          handleCompassChange={handleCompassChange}

          saveQuestion = { saveQuestion }  
        />

        <div className={classNames(cls.listOfSubject, { [cls.active]: compass })} >
          {TEST_QUESTIONS.map((item, index) => {
            return <ListOfSubject
              BASE_URL={BASE_URL}
              mapWithAnswers={mapWithAnswers}

              handleScrollQuestionById={handleScrollQuestionById}

              key={index}
              navigateBySubId={index}
              questions_count={item.questions_count}
              questions={item.questions}
              subject={item.subject}
              showListOfSubject={showListOfSubject}
              onChangeSubjectList={onChangeSubjectList} />
          })}
        </div>

        <button className='button button__over dn-1000' onClick={onFinishTestButton}> Завершить тестирование </button>
      </div>
    )
  }

  export default TestControl;