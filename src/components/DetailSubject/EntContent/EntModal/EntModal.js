import React from 'react';

import cls from './EntModal.module.css';


const EntModel = ({ profile_subjects, BASE_URL, showEntModal, onChangeEntModal, onSelectProfSubject }) => {

    const onSelectSubject = (object, index) => {
        onSelectProfSubject(object, index);
        onChangeEntModal(false, null);
    }
    
    return (
        <div className = {cls.modal}>
            <div className = {cls.ent__modal}>
                <span className = {cls.modal__close} onClick = {() => onChangeEntModal(false, null)}>  </span>
                <div className = {cls.modal__title}> Выбор профильного предмета #{showEntModal && showEntModal.number} </div>

                <div className = {cls.modal__subjects}>
                    { profile_subjects.map((item, index) => {
                        return (
                            <div className = {cls.subject} key = { index } style = {{ backgroundColor: item.color }}>
                                <img src = { BASE_URL + "" + item.logo } alt = ""/>
                                <div className = {cls.subject__title}> { item.name_ru } </div>
                                <div>
                                <button className = 'button button__over button__over--height30'
                                    onClick = {() => onSelectSubject(item, showEntModal.number - 1)}> Выбрать </button>
                                </div>
                            </div>
                        )
                    }) }
                </div>
            </div>
        </div>
    )
}
export default EntModel;