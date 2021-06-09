import React from 'react';
import { Link } from 'react-router-dom';




const Modal = ({ 
  error_code, 
  error_data, 
  duringTheTest, 
  handleCloseModal, 
  handleNewSubs,
}) => {


  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [])


  return (
    <React.Fragment>
      <div className='modal'>
        <div className='modal__inner' >

          { error_code === 1 &&  
            <UnfinishedExamModal 
              error_data = { error_data } 
              handleCloseModal = { handleCloseModal }
            />}
          
          { error_code === 3 &&
            <NoMoneyModal
              handleCloseModal = { handleCloseModal } 
            /> }

          { error_code === 5 &&
            <NoQuestionModal 
              handleCloseModal = { handleCloseModal }
            /> }
          
          { error_code === 6 && 
            <SimpleModal
              error_message = 'Кешіріңіз, бұндай тест жоқ.'
              handleCloseModal = { handleCloseModal } 
            /> }
          
          { error_code === 2 && 
            <SimpleModal 
              error_message = 'Кешіріңіз, сізде бұл тестілеуге рұқсат жоқ.'
              handleCloseModal = { handleCloseModal }
            />}
          
          { error_code === 4 &&
            <SimpleModal
              error_message = ' Кешіріңіз, бұл тестілеу аяқталып қойған.'
              handleCloseModal = { handleCloseModal }
            />}
          
          { error_code === 7 &&
            <UnfinishedSubsModal
              handleNewSubs = { handleNewSubs }
              handleCloseModal = { handleCloseModal } 
            /> }
          

        </div>
      </div>

      { duringTheTest && <div className='modal__empty'></div>}
    </React.Fragment>

  )
}

const UnfinishedExamModal = ({ error_data, handleCloseModal }) => {
  return (
    <React.Fragment>
      <div className='modal__header'>
        <div className='modal__title'> Тестілеуді жалғастыру </div>
      </div>

      <div className = 'modal__content'>
        <div className = 'modal__description'> 
          Сізде <b>{error_data.name_ru}</b> аяқталмаған тест бар.   
          Сіз оны аяқтамай жаңа тест бастай алмайсыз.
        </div>
      </div>

      <div className='modal__footer'>
        <button onClick={handleCloseModal} className='button button__over'> Жабу </button>
        <Link
          onClick={handleCloseModal}
          className='button button__continue'
          to={`/start_test/${error_data.uuid}`}>
          Жалғастыру
        </Link>
      </div>

    </React.Fragment>
  )
}



const NoMoneyModal = ({ handleCloseModal }) => {
  return (
    <React.Fragment>
      <div className='modal__header'>
        <div className='modal__title'> Сіздің балансыңызда сатып алуға қаражат жеткіліксіз </div>
      </div>

      <div className = 'modal__content'>
        <div className = 'modal__description'> 
        Тестілеуді бастау үшін подписка немесе бір тест сатып алыңыз
        тест сатып алу үшін баланысты толтыру қажет <Link 
            to = '/profile/wallet' 
            className = 'modal__link'
            onClick={handleCloseModal}> 
            баланысты толтыру
          </Link>
        </div>
      </div>

      <div className='modal__footer'>
        <button onClick={handleCloseModal} className='button button__over'> Жабу </button>
        <Link
          onClick={handleCloseModal}
          className='button button__continue'
          to={`/subscription`}>
          Подпискаға жазылу
        </Link>
      </div>

    </React.Fragment>
  )
}



const NoQuestionModal = ({ handleCloseModal }) => {
  return (
    <React.Fragment>
      <div className='modal__header'>
        <div className='modal__title'> Назар аударыңыз ! </div>
      </div>

      <div className = 'modal__content'>
        <div className = 'modal__description'>
          Кешіріңіз, бізде нұсқалар таусылды. Жақын уақытта біз жаңа нұсқаларды қосамыз.
        </div>
      </div>

      <div className='modal__footer'>
        <button onClick={handleCloseModal} className='button button__over'> Жабу </button>
      </div>

    </React.Fragment>
  )
}



const SimpleModal = ({ handleCloseModal, error_message }) => {
  return (
    <React.Fragment>
      <div className='modal__header'>
        <div className='modal__title'> Назар аударыңыз ! </div>
      </div>

      <div className = 'modal__content'>
        <div className = 'modal__description'>
          { error_message }
        </div>
      </div>

      <div className='modal__footer'>
        <button onClick={handleCloseModal} className='button button__over'> Жабу </button>
      </div>

    </React.Fragment>
  )
}

const UnfinishedSubsModal = ({ handleCloseModal, handleNewSubs }) => {
  return (
    <React.Fragment>
      <div className='modal__header'>
        <div className='modal__title'> Назар аударыңыз ! </div>
      </div>

      <div className = 'modal__content'>
        <div className = 'modal__description'>
          Сізде әлі бітпеген подписка бар. Сіз сонда да сатып алғыңыз келеді ме?
        </div>
      </div>

      <div className='modal__footer'>
        <button onClick={handleCloseModal} className='button button__over'> Жабу </button>
        <button type='submit' value='SUBMIT' className='button button__continue' onClick = { handleNewSubs }> Йа </button>
      </div>

    </React.Fragment>
  )
}





export default Modal;