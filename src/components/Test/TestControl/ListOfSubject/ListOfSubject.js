import React from 'react';
import classNames from 'classnames';
import arrow from '../../../../assets/detail/arrow.svg';
import cls from './ListOfSubject.module.css';


const ListOfSubject = ({ index, title, image, output, numbers, showListOfSubject, onChangeSubjectList}) => {
    const isOpen = index === showListOfSubject;

    return (
        <div className = {cls.listOf}>
            <div className = {cls.listOf__header} onClick = {() => onChangeSubjectList(index)}>
                <div className = {cls.listOf__info}>
                    <img src = { image } alt = "" />
                    <div className = {cls.listOf__block}>
                        <div className = {cls.name}> { title } </div>
                        <div className = {cls.result}> { output } </div>
                    </div>
                </div>
                <img className = {classNames({[cls.transformImage]: isOpen})} src = { arrow } alt = ""  />
            </div>
            <div className = {classNames(cls.list, {[cls.open]: isOpen})}>
                {numbers.map((item, index) => {
                    return (
                        <div className = {classNames(cls.block, {[cls.active]: index < 10})} key = { index }>
                            { item }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListOfSubject;