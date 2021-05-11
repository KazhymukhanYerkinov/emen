import React from 'react';
import cls from './EntContent.module.css';
import EntModel from './EntModal/EntModal';
import ManSubjects from './MandatorySubjects/ManSubjects';
import ProfileSubject from './ProfileSubjects/ProfileSubjects';


const EntContent = ({ detail, BASE_URL, profSubjects, setProfSubject, error }) => {

  const [showEntModal, setShowEntModal] = React.useState({ isValid: false, number: null });

  // ENT Profile сабақтар комбинациясы
  const [combination, setCombination] = React.useState(detail.profile_subjects);

  const onChangeEntModal = (onShow, index) => {
    setShowEntModal(prevState => {
      return {
        ...prevState,
        isValid: onShow,
        number: index,
      }
    })
  }

  const handleCombination = (object_combination, full_combination) => {
    const filter = [];

    for (let i = 0; i < object_combination.length; i++) {
      for (let k = 0; k < full_combination.length; k++) {

        if (object_combination[i] === full_combination[k].id) {
          filter.push(full_combination[k]);
        }
      }
    }
    setCombination(filter);
  }

  const onSelectProfSubject = (object, index) => {
    const newSubjects = profSubjects.subjects.slice();
    newSubjects[index] = object;
    setProfSubject({ subjects: newSubjects });

    
    handleCombination(object.combinations, detail.profile_subjects);
    
  }

  const onRemoveProfSubject = (index) => {
    const removeSubject = profSubjects.subjects.slice();
    removeSubject[index] = null;
    setProfSubject({ subjects: removeSubject });

    if (index === 0 && removeSubject[1] !== null) {
      handleCombination(removeSubject[1].combinations, detail.profile_subjects)
    }
    else if (index === 1 && removeSubject[0] !== null) {
      handleCombination(removeSubject[0].combinations, detail.profile_subjects)
    }
    else if ((index === 0 && removeSubject[1] === null) || (index === 1 && removeSubject[0] === null)) {
      setCombination(detail.profile_subjects)
    }


  }

  return (
    <div className={cls.ent}>
      <ManSubjects
        BASE_URL={BASE_URL}
        mandatory_subjects={detail.mandatory_subjects}
      />
      <ProfileSubject
        error={error}
        BASE_URL={BASE_URL}
        profSubjects={profSubjects}
        onChangeEntModal={onChangeEntModal}
        onRemoveProfSubject={onRemoveProfSubject}

      />
      {showEntModal.isValid &&
        <EntModel
          profile_subjects={combination}
          BASE_URL={BASE_URL}
          showEntModal={showEntModal}
          onChangeEntModal={onChangeEntModal}
          onSelectProfSubject={onSelectProfSubject}
        />}

    </div>
  )
}

export default React.memo(EntContent);