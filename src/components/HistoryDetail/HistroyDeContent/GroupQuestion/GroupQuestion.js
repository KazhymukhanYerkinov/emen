import React from 'react';
import cls from '../../HistoryDetail.module.css';
import Question from '../Question/Question';


const GroupQuestion = (props) => {
  React.useEffect(() => {
    document.getElementById(`history_group_question_${props.group_question.id}`).innerHTML = props.group_question.group_text
  }, [props.group_question.group_text, props.group_question.id])
  return (
    <React.Fragment>
      <div id = {`history_group_question_${props.group_question.id}`} className = {cls.group__question}>  </div>
      
      { props.group_question.questions.map((question, index) => {
        return (
          <Question
            key = { index } 
            question = { question }
          />
        )
      }) }
      
    </React.Fragment>
  )
}

export default GroupQuestion;