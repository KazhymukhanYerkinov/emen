import React from 'react';
import classNames from 'classnames';

import arrow from '../../../../../assets/detail/arrow.svg';


const NavSubject = (props) => {

  let is_open = props.showNavigatorQuestion === props.id;

  // arrow image
  let clx = classNames('navigator__subject-arrow', {'active': is_open});

  return (
    <div>
      <div className = 'navigator__subject-header' onClick = { () => props.handleNavigatorQuestions(props.id) }>
        <div className = 'navigator__subject-content'>
          <img className = 'navigator__subject-image' src = { props.BASE_URL +''+ props.variant.subject.logo } alt = '' />

          <div className = 'navigator__subject-info'>
            <div className = 'navigator__subject-name'> { props.variant.subject.name_ru } </div>
            <div className = 'navigator__subject-result'> Результат: {props.variant.score}/{ props.variant.questions_count } </div>
          </div>

        </div>
        <img className = {clx} src = { arrow } alt = '' />
      </div>

      <div className = {classNames('navigator__blocks', {'open': is_open})} id = {`history_navigator_${props.id}`}>
        { props.variant.questions.map((question) => {
          if (question.is_group) {
            return (
              <React.Fragment key = { question.id }>
                { question.questions.map((question) => {
                  return (
                    <div key = { question.id }
                        onClick = {() => props.handleSmoothScroll(question.id)}
                        className = { classNames('navigator__block', 
                          {
                            'navigator__block-correct': question.score === 'score', 
                            'navigator__block-error': question.score === 'zero',
                            'navigator__block-half': question.score === 'half',
                          }) }>
                        
                        { question.numeration }
                    </div>
                  )
                }) }
              </React.Fragment>
            )
          }
          return (
            <div key = { question.id } 
              onClick = { () => props.handleSmoothScroll(question.id) }
              className = { classNames('navigator__block', {
                'navigator__block-correct': question.score === 'score', 
                'navigator__block-error': question.score === 'zero',
                'navigator__block-half': question.score === 'half',
              }) }>

              { question.numeration }

            </div>
          )
        }) }
      </div>
    </div>
  )
}

export default NavSubject