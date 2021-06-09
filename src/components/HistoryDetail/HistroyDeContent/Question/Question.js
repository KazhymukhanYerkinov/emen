
import React from 'react';
import classNames from 'classnames';
import WarningIcon from '@material-ui/icons/Warning';

import Answer from './Answer/Answer';
import { Tooltip } from '@material-ui/core';
import ReportAnErrorModal from '../../../common/Modal/ReportAnErrorModal';



const Question = (props) => {

  // Показать разбор state
  const [ showParse, setShowParse ] = React.useState(false);
  const [ reportError, setReportError ] = React.useState(false);

  // TEXTтарды HTML ге айналдыру
  React.useEffect(() => {

    // Question text convert to html
    document.getElementById(`question_${props.question.id}`).innerHTML = props.question.question_text;

    // Answer text convert to html
    for (let answer of props.question.answers) {
      document.getElementById(`answer_${answer.id}`).innerHTML = answer.answer_text
    }

    // Solution text convert to html
    if (props.question.solution_text) {
      document.getElementById(`solution_${props.question.id}`).innerHTML = props.question.solution_text
    }
    
  }, [props.question.question_text, props.question.solution_text, props.question.id, props.question.answers])


  const handleShowParse = () => {
    setShowParse((prevState) => !prevState);
  }

  const activateReportError = () => {
    setReportError(true)
  }
  const deactivateReportError = () => {
    setReportError(false)
  }

  return (
    <div className = 'question' id = {`history_scroll_${props.question.id}`}>
      <div className = 'question__header'>
        <div className='question__number'> Сұрақ #{props.question.numeration} </div>
        <div onClick = { activateReportError }>
          <Tooltip arrow title='Қате туралы хабарлау' placement='top'>
            <WarningIcon className = 'question__warning'/>
          </Tooltip>
        </div>
      </div>

      { reportError && <ReportAnErrorModal 
        is_group = { false }
        question_id = { props.question.id }
        deactivateReportError = { deactivateReportError }  /> }

      <div id = { `question_${props.question.id}` } className='question__text'></div>

      <div>
        { props.question.answers.map((answer, index) => {
          return (
            <Answer
              key = { index }
              answer = { answer }
            />
          )
        }) }
      </div>

      <React.Fragment>
        <div className = 'question__hint' onClick = { handleShowParse }> {showParse ? <span> Талдауды жасыру </span>:<span> Талдауды көрсету</span>} </div>
        <div id = {`solution_${props.question.id}`} className = {classNames('question__hint-text', {'active': showParse})} > </div>
      </React.Fragment>
    </div>
  )
}

export default Question;