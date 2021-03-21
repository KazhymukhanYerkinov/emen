import React from 'react';
import Cookie from 'js-cookie';
import classNames from 'classnames';
import TurnedInIcon from '@material-ui/icons/TurnedIn';

import cls from './TestQuestion.module.css';
import TestAnswer from '../TestAnswer/TestAnswer';
import MultipleAnswer from '../MultipleAnswer/MultipleAnswer';



const TestQuestion = ({
  id, 
  uuid,
  indexOfSub,
  numeration,
  is_group, 
  is_multiple, 
  help_text, 
  answers, 
  question_text, 
  mapWithAnswers, 
  setMapWithAnswers }) => {
  

  console.log('QUESTIOn')
  // Избранный сұрақты басқаратын state
  const [saveQuestion, setSaveQuestion] = React.useState(null);

  // Подсказканы басқаратын state
  const [isHint, setIsHint] = React.useState(false);

  React.useEffect(() => {
    // Текст сұрақтарды html ге айналдырады
    document.getElementById(`question_${id}`).innerHTML = question_text;

    // Текст подсказкаларды html ге айналдыру
    if (help_text)
      document.getElementById(`hint_${id}`).innerHTML = help_text;

  }, [indexOfSub])

  // Жауаптардың үстінен басқаннан кейінгі жауаптарды map-қа және кукиға сақтау
  const onSetActiveAnswer = (answerId) => {
    if (!is_multiple) {
      let object = {
        question: id,
        answer: [answerId],
        variant: uuid,
      }
      setMapWithAnswers(new Map(mapWithAnswers.set(id, object)));
    }
    else {
      if (!mapWithAnswers.has(id)) {

        let object = {
          question: id,
          answer: [answerId],
          variant: uuid,
        }

        setMapWithAnswers(new Map(mapWithAnswers.set(id, object)));
      }
      else {
        let getAnswers = mapWithAnswers.get(id).answer;


        if (getAnswers.includes(answerId)) {
          let tempAnswers = getAnswers.filter(answerID => answerID !== answerId);

          if (tempAnswers.length === 0) {
            console.log(mapWithAnswers.delete(id));

            setMapWithAnswers(new Map(mapWithAnswers));
            return;
          }
          
          let object = {
            question: id,
            answer: tempAnswers,
            variant: uuid
          }

          setMapWithAnswers(new Map(mapWithAnswers.set(id, object)));
        }
        else {
          let object = {
            question: id,
            answer: [...getAnswers, answerId],
            variant: uuid,
          }

          setMapWithAnswers(new Map(mapWithAnswers.set(id, object)));
        }
      }
    }
    Cookie.set('answers', Array.from(mapWithAnswers));
  }

  // Избранный сұрақтарды сақтау
  const onSaveQuestion = (questionId) => {
    if (saveQuestion) {
      setSaveQuestion(null);
    }
    else {
      setSaveQuestion(questionId);
    }
  }

  // Подсказканы көрстеу / көрсетпеу функциясы
  const handleIsHint = () => {
    setIsHint((prevHint) => !prevHint);
  }


  
  return (
    <div className={classNames(cls.ques, { [cls.is_group]: is_group })} id={`scroll_${id}`}>

      <div className={cls.ques__header}>
        <div className={cls.ques__title}> Вопрос #{numeration}</div>
        {/* <div onClick={() => onSaveQuestion(id)}>
          <TurnedInIcon className={classNames(cls.ques__save, { [cls.active]: saveQuestion !== null })} />
        </div> */}
      </div>

      <div id={`question_${id}`} className={cls.ques__text}> {question_text} </div>


      <fieldset className={cls.answers}>
        {!is_multiple ?
          answers.map((item, index) => {
            return <TestAnswer
              key={index}

              answer_id={item.id}
              answer_text={item.answer_text}

              question_id={ id }
              mapWithAnswers={mapWithAnswers}
              onSetActiveAnswer={onSetActiveAnswer}
            />
          }) :
          answers.map((item, index) => {
            return <MultipleAnswer
              key={index}

              answer_id={item.id}
              answer_text={item.answer_text}

              question_id={id}
              mapWithAnswers={mapWithAnswers}
              onSetActiveAnswer={onSetActiveAnswer}
            />
          })}


      </fieldset>

      {help_text &&
        <>
          <div className={cls.ques__hint} onClick={handleIsHint}> {isHint ? <span> Cкрыть подсказку </span> : <span>Показать подсказку</span>} </div>
          <div className={classNames(cls.hint_text, { [cls.hintActive]: isHint })} id={`hint_${id}`}>  </div>
        </>
      }

    </div>
  )
}

export default TestQuestion;