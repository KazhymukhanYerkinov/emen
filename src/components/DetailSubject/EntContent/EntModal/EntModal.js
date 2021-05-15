import React from 'react';
import CloseIcon from '@material-ui/icons/Close';


const EntModel = ({ profile_subjects, BASE_URL, showEntModal, onChangeEntModal, onSelectProfSubject }) => {

    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])

    const onSelectSubject = (object, index) => {
        onSelectProfSubject(object, index);
        onChangeEntModal(false, null);
    }
    
    return (
        <div className = 'modal'>
            <div className = 'modal__inner modal__inner-ent'>

                <div className = 'modal__header-setting mb-10'>
                    <div className = 'modal__title'>  #{showEntModal && showEntModal.number}-ші таңдау пәнін таңдаңыз. </div>
                    <div onClick = {() => onChangeEntModal(false, null)}>
                        <CloseIcon className = 'modal__close' />
                    </div> 
                </div>
                
               

                <div className = 'modal__subjects'>
                    { profile_subjects.map((item, index) => {
                        return (
                            <div className = 'subject subject__ent' key = { index } style = {{ backgroundColor: item.color }}>
                                <img className = 'image image__40px' src = { BASE_URL + "" + item.logo } alt = ""/>
                                <div className = 'subject__ent-title'> { item.name_ru } </div>
                                <div>
                                <button className = 'button button__over button__over--height30'
                                    onClick = {() => onSelectSubject(item, showEntModal.number - 1)}> Таңдау </button>
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