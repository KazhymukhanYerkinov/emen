import React from 'react';
import { profileSubjects } from '../../../../data/ent';
import cls from './EntModel.module.css';


const EntModel = ({ showEntModal, onChangeEntModal, onSelectProfSubject }) => {

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
                    { profileSubjects.map((item, index) => {
                        return (
                            <div className = {cls.subject} key = { index } style = {{ backgroundColor: item.color }}>
                                <img src = { item.image } alt = ""/>
                                <div className = {cls.subject__title}> { item.title } </div>
                                <button className = {cls.subject__button}
                                onClick = {() => onSelectSubject(item, showEntModal.number - 1)}> Выбрать </button>
                            </div>
                        )
                    }) }
                </div>
            </div>
        </div>
    )
}
export default EntModel;