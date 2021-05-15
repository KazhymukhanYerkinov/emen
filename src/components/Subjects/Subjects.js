import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { getSubjectsThunk } from '../../redux/subject-reducer';
import Subject from './Subject';

import cls from './Subjects.module.css'


const Subjects = ({ language, BASE_URL }) => {
    const dispatch = useDispatch();
    const subjects = useSelector(({ subjectPage }) => subjectPage.subjects);

    React.useState(() => {
        dispatch(getSubjectsThunk());
    }, []);
    
    if (subjects.length <= 0) {
        return <Preloader />
    }

    let MANDATORY_SUBJECTS = subjects._MANDATORY_SUBJECT_;
    let PROFILE_SUBJECTS = subjects._PROFILE_SUBJECT_;


    return (
        <div className = {cls.subjects}>
            <div className = "container">

                <div className = {cls.subjects__header}>
                    <div className = {cls.title}> Тестілеу </div>
                    <div className = {cls.description}> Сіз тестілеуді тақырып бойынша, жеке пән <br className = {cls.br}/> бойыша және  толық ҰБТ бойынша өте аласыз. </div>
                </div>

                <div className = {cls.subjects__content}>
                    <div className = {cls.content__inner}>
                        { MANDATORY_SUBJECTS.map((item, index) => {
                            return <Subject 
                                key = { index }  
                                id = { index } 
                                language = { language } 
                                item = { item } 
                                BASE_URL = { BASE_URL }/>
                        })}

                        { PROFILE_SUBJECTS.map((item, index) => {
                            return <Subject 
                                key = { index }  
                                index = { index } 
                                language = { language } 
                                item = { item } 
                                BASE_URL = { BASE_URL }/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subjects;