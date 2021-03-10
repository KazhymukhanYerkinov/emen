import React from 'react';
import classNames from 'classnames';
import arrow from '../../../../assets/detail/arrow.svg';
import cls from './ListOfSubject.module.css';


const ListOfSubject = ({ 
    BASE_URL,
    INDIVIDUAL_TEST, 
    mapWithAnswers, 
    index, questions, 
    subject, 
    showListOfSubject, 
    onChangeSubjectList,
    handleScrollQuestionById }) => {

    const isOpen = index === showListOfSubject || INDIVIDUAL_TEST;

    let length = 0;
    function handleQuestionsLength(){
        for (let i = 0; i < questions.length; i++) {
            if (!questions[i].is_group) {
                length += 1;
            }
            else length = length + questions[i].questions.length;
        }
    };
    handleQuestionsLength();
   

    return (
        <div className = {cls.listOf}>
            <div className = {cls.listOf__header} onClick = {() => onChangeSubjectList(index)}>
                <div className = {cls.listOf__info}>
                    <img src = {BASE_URL + '' + subject.logo  } alt = "" />
                    <div className = {cls.listOf__block}>
                        <div className = {cls.name}> { subject.name_ru } </div>
                        <div className = {cls.result}> Отвечено: { mapWithAnswers.size } / { length } </div>
                    </div>
                </div>
                {!INDIVIDUAL_TEST && <img className = {classNames({[cls.transformImage]: isOpen})} src = { arrow } alt = ""  />}
            </div>
            <div className = {classNames(cls.list, {[cls.open]: isOpen})}>  
                {questions.map((item, index) => {
                    let isActive = mapWithAnswers.has(item.id);
                    return item.is_group ? 
                    (
                        <React.Fragment key = { index }>
                            {item.questions.map((question, uniqueKey) => {
                                isActive = mapWithAnswers.has(question.id);
                                return (
                                    <div className = {classNames(cls.block, {[cls.active]: isActive})} key = { uniqueKey } onClick = {() => handleScrollQuestionById(question.id)}>
                                        { question.numeration }
                                    </div>
                                )
                            })}
                        </React.Fragment>
                    ):(
                        <div className = {classNames(cls.block, {[cls.active]: isActive})} key = { index } onClick = {() => handleScrollQuestionById(item.id)}>
                            { item.numeration }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListOfSubject;