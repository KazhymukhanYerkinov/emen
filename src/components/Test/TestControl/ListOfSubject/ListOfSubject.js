import React from 'react';
import classNames from 'classnames';
import arrow from '../../../../assets/detail/arrow.svg';
import SquareBlock from './SquareBlock/SquareBlock';


const ListOfSubject = ({
  BASE_URL,
  mapWithAnswers,
  navigateBySubId, 
  questions,
  subject,
  questions_count,
  showListOfSubject,
  onChangeSubjectList,
  handleScrollQuestionById }) => {

  const isOpen = navigateBySubId === showListOfSubject;
  let size = 0;
  let squareBlocks = questions.map((item, index) => {
    
    // Сұрақтардың белгіленгеннін санау
    let isActive = mapWithAnswers.has(item.id);
    if (isActive) size += 1;
    
    return item.is_group ? 
      
      // Группавой сұрақтар үшін квадратты блоктар
      <React.Fragment key = { index }>
        { item.questions.map((question, uniqueKey) => { 

          // Сұрақтардың белгіленгенін санау
          isActive = mapWithAnswers.has(question.id)  
          if (isActive) size += 1;

          return <SquareBlock
            key = { uniqueKey }
            question_id = { question.id }
            numeration = { question.numeration }
            isActive = { isActive }
            handleScrollQuestionById = { handleScrollQuestionById }
          />
        }) }
      </React.Fragment>:

      // Группавой еместерге арналған
      <SquareBlock
        key = { index }
        question_id = { item.id }
        numeration = { item.numeration }
        isActive = { isActive }
        handleScrollQuestionById = { handleScrollQuestionById }
      />
    })


    let clx = classNames('navigator__subject-arrow', {'active': isOpen});
    
  return (
    <div>
      <div className = 'navigator__subject-header' onClick={() => onChangeSubjectList(navigateBySubId)}>
        <div className='navigator__subject-content'>

          <img className = 'navigator__subject-image' src={BASE_URL + '' + subject.logo} alt="" />

          <div className='navigator__subject-info'>
            <div className='navigator__subject-name'> {subject.name_ru} </div>
            <div className='navigator__subject-result'> Жауап берді: { size } / { questions_count } </div>
          </div>

        </div>
        <img className={ clx } src={arrow} alt="" />
      </div>

      <div className={classNames('navigator__blocks', {'open': isOpen})}>
        { squareBlocks }
      </div>

    </div>
  )
}

export default ListOfSubject;