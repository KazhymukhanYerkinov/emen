import React from 'react';
import classNames from 'classnames';
import arrow from '../../../../assets/detail/arrow.svg';
import cls from './ListOfSubject.module.css';
import SquareBlock from './SquareBlock/SquareBlock';


const ListOfSubject = ({
  BASE_URL,
  INDIVIDUAL_TEST,
  mapWithAnswers,
  navigateBySubId, 
  questions,
  subject,
  questions_count,
  showListOfSubject,
  onChangeSubjectList,
  handleScrollQuestionById }) => {

  const isOpen = navigateBySubId === showListOfSubject || INDIVIDUAL_TEST;
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
            navigateBySubId = { navigateBySubId }
            question_id = { question.id }
            numeration = { question.numeration }
            isActive = { isActive }
            handleScrollQuestionById = { handleScrollQuestionById }
          />
        }) }
      </React.Fragment>:

      // Группавой еместерге арналған
      <SquareBlock
        navigateBySubId = { navigateBySubId }
        key = { index }
        question_id = { item.id }
        numeration = { item.numeration }
        isActive = { isActive }
        handleScrollQuestionById = { handleScrollQuestionById }
      />
    })



  return (
    <div className={cls.listOf}>
      <div className={cls.listOf__header} onClick={() => onChangeSubjectList(navigateBySubId)}>
        <div className={cls.listOf__info}>

          <img src={BASE_URL + '' + subject.logo} alt="" />
          <div className={cls.listOf__block}>
            <div className={cls.name}> {subject.name_ru} </div>
            <div className={cls.result}> Отвечено: { size } / { questions_count } </div>
          </div>

        </div>
        {!INDIVIDUAL_TEST && <img className={classNames({ [cls.transformImage]: isOpen })} src={arrow} alt="" />}
      </div>

      <div className={classNames(cls.list, { [cls.open]: isOpen })}>
        { squareBlocks }
      </div>

    </div>
  )
}

export default ListOfSubject;