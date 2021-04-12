import React from 'react';
import classNames from 'classnames';

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
    <div className={classNames('question', { 'is-group': is_group })} id={`scroll_${id}`}>

      <div>
        <div className = 'question__number'> Вопрос #{numeration}</div>
      </div>

      <div id={`question_${id}`} className='question__text'> {question_text} </div>


      <fieldset>
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
          <div className = 'question__hint' onClick={handleIsHint}> {isHint ? <span> Cкрыть подсказку </span> : <span>Показать подсказку</span>} </div>
          <div className={classNames('question__hint-text', {'active': isHint})} id={`hint_${id}`}>  </div>
        </>
      }

    </div>
  )
}

export default TestQuestion;