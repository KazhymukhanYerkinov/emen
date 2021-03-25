import React from 'react';
import classNames from 'classnames';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import cls from './Answer.module.css';

const Answers = (props) => {
  return (
    <div className={classNames(cls.answer, {
      [cls.answer__wrong]: props.answer.is_answered && !props.answer.is_correct,
      [cls.answer__correct]: props.answer.is_correct,
    })}>
      
      <div id = {`answer_${props.answer.id}`} className={cls.answer__text}> { props.answer.answer_text } </div>
      {props.answer.is_answered && !props.answer.is_correct && <CancelIcon className={cls.wrong__icon} />}
      {props.answer.is_answered && props.answer.is_correct && <CheckCircleIcon className = {cls.correct_icon} /> }
    </div>
  )
}

export default Answers;