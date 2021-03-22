import React from 'react';

import TestQuestion from '../TestQuestion/TestQuestion';

import cls from '../TestContent.module.css'



const TestGroup = ({ 
  item,
  uuid, 
  mapWithAnswers, 
  setMapWithAnswers }) => {
  React.useEffect(() => {
    document.getElementById(`group_question_${item.id}`).innerHTML = item.group_text;
  }, [item.id, item.group_text])
  
  return (
    <div>
      <div className={cls.group__text} id = {`group_question_${item.id}`}></div>
      {item.questions.map((question, uniqueKey) => {
        return <TestQuestion
          key={uniqueKey}
          uuid = { uuid }
          {...question}
          mapWithAnswers={mapWithAnswers}
          setMapWithAnswers={setMapWithAnswers}
        />
      })}
    </div>
  )
}

export default TestGroup;