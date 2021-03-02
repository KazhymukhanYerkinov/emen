import React from 'react';
import { mandatorySubjects } from '../../../data/ent';
import cls from './EntContent.module.css';
import EntModel from './EntModel/EntModel';
import ProfileSubject from './ProfileSubject/ProfileSubject';


const EntContent = () => {

    console.log("ENT CONTENT")

    const [ profSubjects, setProfSubject ] = React.useState({subjects: [null, null]});
    const [ showEntModal, setShowEntModal ] = React.useState({ isValid: false, number: null });
    
    const onChangeEntModal = (onShow, index) => {
        setShowEntModal(prevState => {
            return {
                ...prevState,
                isValid: onShow,
                number: index,
            }
        })
    }

    const onSelectProfSubject = (object, index) => {
        const newSubjects = profSubjects.subjects.slice();
        newSubjects[index] = object;
        setProfSubject({subjects: newSubjects});
    }

    const onRemoveProfSubject = (index) => {
        const removeSubject = profSubjects.subjects.slice();
        removeSubject[index] = null;
        setProfSubject({subjects: removeSubject});
    }

    return (
        <div className = { cls.ent }>
            <div className = { cls.ent__title }> Обязательные предметы </div>
            <div className = { cls.ent__desc }> Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.  </div>

            <div className = {cls.mandatory}>
                {mandatorySubjects.map((item, index) => {
                    return (
                        <div className = {cls.subject} style = {{ backgroundColor: item.color }} key = { index }>
                            <img src = {item.image} alt = "" />

                            <div className = {cls.subject__info}>
                                <div className = {cls.subject__name}> { item.title } </div>
                                <div className = {cls.subject__variant}> { item.variant } </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <ProfileSubject profSubjects = { profSubjects } onChangeEntModal = { onChangeEntModal }
                            onRemoveProfSubject = { onRemoveProfSubject }/>
            {showEntModal.isValid && 
            <EntModel showEntModal = { showEntModal } onChangeEntModal = { onChangeEntModal } 
                                               onSelectProfSubject = { onSelectProfSubject }/>}
           
        </div>
    )
}

export default React.memo(EntContent);