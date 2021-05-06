import { Tooltip } from '@material-ui/core';
import React from 'react';
import cls from '../../HistoryDetail.module.css';
import Question from '../Question/Question';
import WarningIcon from '@material-ui/icons/Warning';
import ReportAnErrorModal from '../../../common/Modal/ReportAnErrorModal';


const GroupQuestion = (props) => {

  const [ reportError, setReportError ] = React.useState(false);

  React.useEffect(() => {
    document.getElementById(`history_group_question_${props.group_question.id}`).innerHTML = props.group_question.group_text
  }, [props.group_question.group_text, props.group_question.id])

  const activateReportError = () => {
    setReportError(true)
  }
  const deactivateReportError = () => {
    setReportError(false)
  }


  return (
    <div className = {cls.group}>
      <div className = 'question__header'>
        <div></div>
        <div className = {cls.group__warning} onClick = { activateReportError }>
          <Tooltip arrow title='Сообщить о ошибке' placement='top'>
            <WarningIcon className = 'question__warning'/>
          </Tooltip>
        </div>
      </div>

      { reportError && <ReportAnErrorModal 
        is_group = { true }
        question_id = { props.group_question.id }
        deactivateReportError = { deactivateReportError }  /> }

      <div id = {`history_group_question_${props.group_question.id}`} className = {cls.group__question}>  </div>
      
      { props.group_question.questions.map((question, index) => {
        return (
          <Question
            key = { index } 
            question = { question }
          />
        )
      }) }
      
    </div>
  )
}

export default GroupQuestion;