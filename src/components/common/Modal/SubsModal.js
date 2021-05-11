import React from 'react';


const SubsModal = (props) => {
  return (
    <div className = 'modal'>
      <div className = 'modal__inner'>

        <div className = 'modal__header'>
          <div className = 'modal__title'> Пожалуйста подтвердите оформление тарифа </div>
        </div>

        <div className = 'modal__content'>
          <div className = 'modal__description'> Сіз <b>{ props.openModal.name }  </b> тарифын таңдаңыз.</div>
        </div>

        <div className = 'modal__footer'>
            <button className = 'button button__over' onClick = {() => props.handleOpenModal(null)}> Отмена </button>
            <button 
              type = 'submit' 
              value = 'SUBMIT' 
              className = 'button button__continue' 
              onClick = {() => props.handlePostSubs(props.openModal.uuid, false)}> 
              Да, подтверждаю 
            </button>
        </div>

      </div>
    </div>
  )
}

export default SubsModal;