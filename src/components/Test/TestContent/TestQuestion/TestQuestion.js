import React from 'react';
import classNames from 'classnames';

import cls from './TestQuestion.module.css';
import TestAnswer from '../TestAnswer/TestAnswer';
import MultipleAnswer from '../MultipleAnswer/MultipleAnswer';





const TestQuestion = ({
  id, 
  uuid,
  numeration,
  is_group, 
  is_multiple, 
  help_text, 
  answers, 
  question_text, 
  hasAnswer,
  setMapWithAnswers }) => {
  

  

  // Подсказканы басқаратын state
  const [isHint, setIsHint] = React.useState(false);

  const [ render, setRender ] = React.useState(false);
  

  React.useEffect(() => {
    // Текст сұрақтарды html ге айналдырады
    document.getElementById(`question_${id}`).innerHTML = question_text;

    // Текст подсказкаларды html ге айналдыру
    if (help_text)
      document.getElementById(`hint_${id}`).innerHTML = help_text;

  }, [help_text, id, question_text])

 

  // Подсказканы көрстеу / көрсетпеу функциясы
  const handleIsHint = () => {
    setIsHint((prevHint) => !prevHint);
  }

  const saveQuestionWithMap = (answer_id) => {
    setMapWithAnswers(id, answer_id, uuid, is_multiple);
    setRender(!render)
  }

  return (
    <div className={classNames(cls.ques, { [cls.is_group]: is_group })} id={`scroll_${id}`}>

      <div className={cls.ques__header}>
        <div className={cls.ques__title}> Вопрос #{numeration}</div>
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
              hasAnswer = { hasAnswer }
              onSetActiveAnswer={ saveQuestionWithMap }
            />
          }) :
          answers.map((item, index) => {
            return <MultipleAnswer
              key={index}

              answer_id={item.id}
              answer_text={item.answer_text}

              question_id={id}
              hasAnswer = { hasAnswer }
              onSetActiveAnswer={ saveQuestionWithMap }
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