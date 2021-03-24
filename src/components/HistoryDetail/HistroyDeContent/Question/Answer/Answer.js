import React from 'react';
import classNames from 'classnames';
import CancelIcon from '@material-ui/icons/Cancel';

import cls from './Answer.module.css';

const Answers = (props) => {

  return (
    <div className={classNames(cls.answer, {
      [cls.answer__wrong]: props.wrong,
      [cls.answer__correct]: props.correct,
    })}>
      
      <div className={cls.answer__text}> A.  Д. Сәдуақасов, И. Қабылов. </div>
      {props.wrong && <CancelIcon className={cls.wrong__icon} />}
    </div>
  )
}

export default Answers;