import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { data } from '../../data/subjects';
import { getSubjectsThunk } from '../../redux/subject-reducer';
import Subject from './Subject/Subject';



import cls from './Subjects.module.css'


const Subjects = () => {
    const dispatch = useDispatch();
    const subjects = useSelector(({ subjectPage }) => subjectPage.subjects);

    React.useState(() => {
        dispatch(getSubjectsThunk());
    }, [])

    return (
        <div className = {cls.subjects}>
            <div className = "container">

                <div className = {cls.subjects__header}>
                    <div className = {cls.title}> Тестирование </div>
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