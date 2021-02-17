import React from 'react';
import { data } from '../../data/subjects';
import Subject from './Subject/Subject';


import cls from './Subjects.module.css'


const Subjects = () => {
    return (
        <div className = {cls.subjects}>
            <div className = "container">

                <div className = {cls.subjects__header}>
                    <div className = {cls.title}> Предметы </div>
                    <div className = {cls.description}> Вы можете выбрать один предмет чтобы пройти тестирование. А также можете пройти полноценное тестирование из 5 предметов как в ЕНТ. </div>
                </div>

                <div className = {cls.subjects__content}>
                    <div className = {cls.content__inner}>
                        { data.map((item, index) => {
                            return <Subject key = { index }  id = { index } {...item} />
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Subjects;