import React from 'react';
import classNames from 'classnames';

import cls from '../EntContent.module.css';



const ProfileSubject = ({ BASE_URL, profSubjects, onChangeEntModal, onRemoveProfSubject, error }) => {
    return (
        <div className = {cls.profile} id = 'profile_subject_id'>
            <div className = {cls.ent__title}> Таңдау пәндері </div>
            <div className = {classNames(cls.ent__desc, {[cls.error]: error})}> Қосу батырмасын басып, тізімнен қажет пәнді таңдаңыз. </div>

            <div className = {cls.profile__content}>
                {profSubjects.subjects.map((item, index) => {
                    return (
                        <div className = {cls.profile__subjects} key = { index } style = {{ backgroundColor: item ? item.color: '' }}>
                            <div className = {cls.profile__flex}>
                                {item && <img className = {cls.subject__image} src = {BASE_URL + "" + item.logo} alt = ""/>}
                                <div>
                                    <div className = {cls.subject__name}> {item ? <span> {item.name_ru} </span>: <span className = {cls.noneTitle}> Таңдау пәні #{index + 1} </span>} </div>
                                    <div className = {cls.subject__variant}> {item ? <span> {item.variant_number} нұсқа <br /> {item.question_number} тапсырма </span>: <span className = {cls.noneDesc}>Қосу батырмасын басып, тізімнен қажет пәнді таңдаңыз </span>} </div>
                                </div>
                            </div>

                            {item ? <button className = 'button button__over button__over--add' onClick = {() => onRemoveProfSubject(index)}> Жою </button> : <button className = 'button button__over button__over--add' onClick = {() => onChangeEntModal(true, index + 1)}> Қосу </button>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ProfileSubject;