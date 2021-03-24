import React from 'react';

import Question from './Question/Question';
import GroupQuestion from './GroupQuestion/GroupQuestion';
import Navigator from './Navigator/Navigator';

import cls from '../HistoryDetail.module.css';



const HistoryDeContent = () => {
  return (
    <div className = {cls.content}>
      <div className = {cls.question__content}>
        <Question />
        <GroupQuestion />
      </div>
      
      <div className = {cls.question__navigator}>
        <Navigator />
      </div>
    </div>
  )
}

export default HistoryDeContent;