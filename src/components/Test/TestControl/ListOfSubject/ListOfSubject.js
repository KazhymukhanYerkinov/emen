import React from 'react';
import classNames from 'classnames';
import arrow from '../../../../assets/detail/arrow.svg';
import cls from './ListOfSubject.module.css';


const ListOfSubject = ({ BASE_URL, INDIVIDUAL_TEST, mapWithAnswers, index, questions, subject, showListOfSubject, onChangeSubjectList}) => {
    const isOpen = index === showListOfSubject || INDIVIDUAL_TEST;
    

    return (
        <div className = {cls.listOf}>
            <div className = {cls.listOf__header} onClick = {() => onChangeSubjectList(index)}>
                <div className = {cls.listOf__info}>
                    <img src = {BASE_URL + '' + subject.logo  } alt = "" />
                    <div className = {cls.listOf__block}>
                        <div className = {cls.name}> { subject.name_ru } </div>
                        <div className = {cls.result}> Отвечено: { mapWithAnswers.size } / { questions.length } </div>
                    </div>
                </div>
                {!INDIVIDUAL_TEST && <img className = {classNames({[cls.transformImage]: isOpen})} src = { arrow } alt = ""  />}
            </div>
            <div className = {classNames(cls.list, {[cls.open]: isOpen})}>
                {questions.map((item, index) => {
                    const isActive = mapWithAnswers.has(item.id);
                    return (
                        <div className = {classNames(cls.block, {[cls.active]: isActive})} key = { index }>
                            { item.numeration }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListOfSubject;