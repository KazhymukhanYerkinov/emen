import React from 'react';
import Answer from './Answer/Answer';

import cls from './Question.module.css';



const Question = () => {

  // Показать разбор state
  const [ showParse, setShowParse ] = React.useState(false);

  const handleShowParse = () => {
    setShowParse((prevState) => !prevState);
  }

  return (
    <div className={cls.question}>
      <div className={cls.question__header}>
        <div className={cls.question__number}> Вопрос #1 </div>
      </div>

      <div className={cls.question__text}>
        Қазақстанның талантты архитекторлары мен инженерлерінің ішінде кімдерге Қызыл астананы салуда қастандық ұйымдастырды деп кінә тағылды?
      </div>

      <div className = {cls.answers}>
        <Answer wrong/>
        <Answer />
        <Answer />
        <Answer correct/>
        <Answer />
      </div>

      <React.Fragment>
        <div className = {cls.question__hint} onClick = { handleShowParse }> {showParse ? <span> Cкрыть разбор </span>:<span> Показать разбор</span>} </div>
        {showParse && <div className = {cls.hint__text}> Қазақтың көрнекті жазушысы, драматург, публицист, қазақ әдебиетін қалыптастырушылардың бірі. Қазақтың көрнекті жазушысы, драматург, публицист, қазақ әдебиетін қалыптастырушылардың бірі.
          Қазақтың көрнекті жазушысы, драматург, публицист, қазақ әдебиетін қалыптастырушылардың бірі. Қазақтың көрнекті жазушысы, драматург, публицист, қазақ әдебиетін қалыптастырушылардың бірі.
          Қазақтың көрнекті жазушысы, драматург, публицист, қазақ әдебиетін қалыптастырушылардың бірі. 
        </div>}
      </React.Fragment>
    </div>
  )
}

export default Question;