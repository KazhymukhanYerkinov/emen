import classNames from 'classnames';
import React from 'react';
import Answer from './Answer/Answer';



const Question = (props) => {

  // Показать разбор state
  const [ showParse, setShowParse ] = React.useState(false);

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

  return (
    <div className = 'question' id = {`history_scroll_${props.question.id}`}>
      <div>
        <div className='question__number'> Вопрос #{props.question.numeration} </div>
      </div>

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
        <div className = 'question__hint' onClick = { handleShowParse }> {showParse ? <span> Cкрыть разбор </span>:<span> Показать разбор</span>} </div>
        <div id = {`solution_${props.question.id}`} className = {classNames('question__hint-text', {'active': showParse})} > </div>
      </React.Fragment>
    </div>
  )
}

export default Question;