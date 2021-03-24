import React from 'react';
import bio from '../../../assets/subjects/bio.svg';

import cls from './HistoryDeHeader.module.css'




const HistoryDeHeader = () => {
  return (
    <div className = {cls.header} style = {{ backgroundColor: '#FF7D51' }}>
      <div className = {cls.header__inner}>
        <img className = {cls.header__logo} src = { bio } alt = '' />
        <div className = {cls.header__info}>
          <div className = {cls.info__title}> Результат тестирования </div>

          <div className = {cls.info__content}>
            <div className = {cls.content__name}> Биология </div>

            <div className = {cls.content__flex}>
              <div> Вариант №: М0001 </div>
              <div> Результат: 15/40 </div>
              <div> Время: 45:56 </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryDeHeader;