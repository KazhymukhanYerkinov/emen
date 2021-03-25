import React from 'react';

import cls from './HistoryDeHeader.module.css'




const HistoryDeHeader = (props) => {


  let second = ('0' + Math.floor(props.history.exam_duration % 60)).slice(-2);
  let minute = ('0' + Math.floor((props.history.exam_duration % 3600) / 60 )).slice(-2);
  let hours = ('0' + Math.floor(props.history.exam_duration / 3600)).slice(-2);

  return (
    <div className = {cls.header} style = {{ backgroundColor: props.history.subject.color }}>
      <div className = {cls.header__inner}>
        <img className = {cls.header__logo} src = { props.BASE_URL +''+ props.history.subject.logo } alt = '' />
        <div className = {cls.header__info}>
          <div className = {cls.info__title}> Результат тестирования </div>

          <div className = {cls.info__content}>
            <div className = {cls.content__name}> { props.history.subject.name_ru } </div>

            <div className = {cls.content__flex}>
              <div> Вариант №: { props.history.subject.code } </div>
              <div> Результат: {props.history.score}/{props.history.total_score} </div>
              <div> Время: {hours}:{minute}:{second} </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryDeHeader;