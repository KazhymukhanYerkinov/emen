import React from 'react';
import cls from './ProfileSubject.module.css';



const ProfileSubject = ({ profSubjects, onChangeEntModal, onRemoveProfSubject }) => {
    return (
        <div className = {cls.professinal}>
            <div className = {cls.professinal__title}> Профильные предметы </div>
            <div className = {cls.professinal__desc}> Нажмите добавить и выберите из списка нужный вам предмет </div>

            <div className = {cls.professinal__content}>
                {profSubjects.subjects.map((item, index) => {
                    return (
                        <div className = {cls.prof__subject} key = { index } style = {{ backgroundColor: item ? item.color: '' }}>
                            {item && <img src = {item.image} alt = ""/>}
                            <div className = {cls.prof__subject__title}> {item ? <span className = {cls.select__title}> {item.title} </span>: <span> Профильный предмет #{index + 1} </span>} </div>
                            <div className = {cls.prof__subject__desc}> {item ? <span className = {cls.select__variant}> {item.variant} </span>: <span>Нажмите добавить и выберите из списка нужный вам предмет </span>} </div>
                            {item ? <button className = {cls.prof__button} onClick = {() => onRemoveProfSubject(index)}> Удалить </button> : <button className = {cls.prof__button} onClick = {() => onChangeEntModal(true, index + 1)}> Добавить </button>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ProfileSubject;