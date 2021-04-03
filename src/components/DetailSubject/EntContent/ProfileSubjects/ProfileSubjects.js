import React from 'react';

import cls from '../EntContent.module.css';



const ProfileSubject = ({ BASE_URL, profSubjects, onChangeEntModal, onRemoveProfSubject }) => {
    return (
        <div className = {cls.profile}>
            <div className = {cls.ent__title}> Профильные предметы </div>
            <div className = {cls.ent__desc}> Нажмите добавить и выберите из списка нужный вам предмет </div>

            <div className = {cls.profile__content}>
                {profSubjects.subjects.map((item, index) => {
                    return (
                        <div className = {cls.profile__subjects} key = { index } style = {{ backgroundColor: item ? item.color: '' }}>
                            <div className = {cls.profile__flex}>
                                {item && <img className = {cls.subject__image} src = {BASE_URL + "" + item.logo} alt = ""/>}
                                <div>
                                    <div className = {cls.subject__name}> {item ? <span> {item.name_ru} </span>: <span className = {cls.noneTitle}> Профильный предмет #{index + 1} </span>} </div>
                                    <div className = {cls.subject__variant}> {item ? <span> 200 вариантов <br /> 5987 задач </span>: <span className = {cls.noneDesc}>Нажмите добавить и выберите из списка нужный вам предмет </span>} </div>
                                </div>
                            </div>

                            {item ? <button className = 'button button__over button__over--add' onClick = {() => onRemoveProfSubject(index)}> Удалить </button> : <button className = 'button button__over button__over--add' onClick = {() => onChangeEntModal(true, index + 1)}> Добавить </button>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ProfileSubject;