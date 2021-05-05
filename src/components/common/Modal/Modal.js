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
              error_message = 'Извините, такого теста нет'
              handleCloseModal = { handleCloseModal } 
            /> }
          
          { error_code === 2 && 
            <SimpleModal 
              error_message = 'У вас нет доступа к этому тесту'
              handleCloseModal = { handleCloseModal }
            />}
          
          { error_code === 4 &&
            <SimpleModal
              error_message = 'Этот тест завершен.'
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
        <div className='modal__title'> Продолжить тестирования </div>
      </div>

      <div className = 'modal__content'>
        <div className = 'modal__description'> 
          У вас незавершенный тест по <b>{error_data.name_ru}</b>. 
          Вы не можете начать новый тест, не завершив его. 
        </div>
      </div>

      <div className='modal__footer'>
        <button onClick={handleCloseModal} className='button button__over'> Отмена </button>
        <Link
          onClick={handleCloseModal}
          className='button button__continue'
          to={`/start_test/${error_data.uuid}`}>
          Продолжить
        </Link>
      </div>

    </React.Fragment>
  )
}



const NoMoneyModal = ({ handleCloseModal }) => {
  return (
    <React.Fragment>
      <div className='modal__header'>
        <div className='modal__title'> У Вас недостаточно средств на балансе для покупки </div>
      </div>

      <div className = 'modal__content'>
        <div className = 'modal__description'> 
          Пожалуйста оформите подписку или купите один тест чтобы начать тестирование 
          чтобы купит тест Вам нужно <Link 
            to = '/profile/wallet' 
            className = 'modal__link'
            onClick={handleCloseModal}> 
            пополнить баланс
          </Link>
        </div>
      </div>

      <div className='modal__footer'>
        <button onClick={handleCloseModal} className='button button__over'> Отмена </button>
        <Link
          onClick={handleCloseModal}
          className='button button__continue'
          to={`/subscription`}>
          Оформите подписку
        </Link>
      </div>

    </React.Fragment>
  )
}



const NoQuestionModal = ({ handleCloseModal }) => {
  return (
    <React.Fragment>
      <div className='modal__header'>
        <div className='modal__title'> Пожалуйста, обратите внимание. </div>
      </div>

      <div className = 'modal__content'>
        <div className = 'modal__description'>
          Извините, варианты закончились. В ближайшее время мы добавим в базу новые вопросы. Подождите пожалуйста :)
        </div>
      </div>

      <div className='modal__footer'>
        <button onClick={handleCloseModal} className='button button__over'> Отмена </button>
      </div>

    </React.Fragment>
  )
}



const SimpleModal = ({ handleCloseModal, error_message }) => {
  return (
    <React.Fragment>
      <div className='modal__header'>
        <div className='modal__title'> Пожалуйста, обратите внимание. </div>
      </div>

      <div className = 'modal__content'>
        <div className = 'modal__description'>
          { error_message }
        </div>
      </div>

      <div className='modal__footer'>
        <button onClick={handleCloseModal} className='button button__over'> Отмена </button>
      </div>

    </React.Fragment>
  )
}

const UnfinishedSubsModal = ({ handleCloseModal, handleNewSubs }) => {
  return (
    <React.Fragment>
      <div className='modal__header'>
        <div className='modal__title'> Пожалуйста, обратите внимание. </div>
      </div>

      <div className = 'modal__content'>
        <div className = 'modal__description'>
          Сізде әлі бітпеген подписка бар. Сіз сонда да сатып алғыңыз келеді ме?
        </div>
      </div>

      <div className='modal__footer'>
        <button onClick={handleCloseModal} className='button button__over'> Отмена </button>
        <button type='submit' value='SUBMIT' className='button button__continue' onClick = { handleNewSubs }> Да </button>
      </div>

    </React.Fragment>
  )
}





export default Modal;