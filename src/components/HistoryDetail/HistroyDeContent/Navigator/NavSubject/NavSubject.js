import React from 'react';
import classNames from 'classnames';

import arrow from '../../../../../assets/detail/arrow.svg';

import cls from '../Navigator.module.css';


const NavSubject = (props) => {

  let is_open = props.showNavigatorQuestion === props.id;

  // arrow image
  let clx = classNames(cls.nav__subject__arrow, {[cls.active__arrow]: is_open});

  return (
    <div className = {cls.nav_subject}>

      <div className = {cls.nav__subject__header} onClick = { () => props.handleNavigatorQuestions(props.id) }>
        <div className = {cls.nav__subject__arrow}>
          <img className = {cls.nav__subject__image} src = { props.BASE_URL +''+ props.variant.subject.logo } alt = '' />
          <div className = {cls.nav__subject__info}>
            <div className = {cls.info__name}> { props.variant.subject.name_ru } </div>
            <div className = {cls.info__result}> Результат: {props.variant.score}/{ props.variant.questions_count } </div>
          </div>
        </div>
        <img className = {clx} src = { arrow } alt = '' />
      </div>

      {is_open && <div className = {cls.square__blocks}>
        { props.variant.questions.map((question, index) => {
          if (question.is_group) {
            return (
              <React.Fragment key = { index }>
                { question.questions.map((question, index) => {
                  return (
                    <div key = { index }
                        onClick = {() => props.handleSmoothScroll(question.id)}
                        className = { classNames(cls.block, {[cls.block__correct]: question.is_correct}) }>
                        
                        { question.numeration }
                    </div>
                  )
                }) }
              </React.Fragment>
            )
          }
          return (
            <div key = { index } 
              onClick = { () => props.handleSmoothScroll(question.id) }
              className = { classNames(cls.block, {[cls.block__correct]: question.is_correct}) }>

              { question.numeration }

            </div>
          )
        }) }
      </div>}
    </div>
  )
}

export default NavSubject