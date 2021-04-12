import React from 'react';
import cls from './EntContent.module.css';
import EntModel from './EntModal/EntModal';
import ManSubjects from './MandatorySubjects/ManSubjects';
import ProfileSubject from './ProfileSubjects/ProfileSubjects';


const EntContent = ({ detail, BASE_URL, profSubjects, setProfSubject, error }) => {


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
            <ManSubjects
                BASE_URL = { BASE_URL }
                mandatory_subjects = { detail.mandatory_subjects }
            />
            <ProfileSubject
                error = { error }
                BASE_URL = { BASE_URL }
                profSubjects = { profSubjects } 
                onChangeEntModal = { onChangeEntModal }
                onRemoveProfSubject = { onRemoveProfSubject }
            />
            {showEntModal.isValid && 
            <EntModel 
                profile_subjects = { detail.profile_subjects }
                BASE_URL = { BASE_URL }
                showEntModal = { showEntModal } 
                onChangeEntModal = { onChangeEntModal } 
                onSelectProfSubject = { onSelectProfSubject }
            />}
           
        </div>
    )
}

export default React.memo(EntContent);