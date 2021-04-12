import React from 'react';
import { Link } from 'react-router-dom';




const Modal = ({ errorsStartTests, BASE_URL, duringTheTest, handleCloseModal }) => {

  const isUnfinished = errorsStartTests.unfinishedExam ? true : false;

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
        document.body.style.overflow = 'unset';
    }
  }, [])

  return (
    <React.Fragment>
      <div className = 'modal'>
        <div className= 'modal__inner' >
          { isUnfinished ?
            <React.Fragment>
              <div className = 'modal__header'>
                <div className = 'modal__title'> Продолжить тестирования </div>
              </div>

              <div className = 'modal__content'>
                <div className = 'modal__description'> {errorsStartTests.errorMessage} </div>

                <div className = 'modal__block' style = {{ backgroundColor:  errorsStartTests.unfinishedExam.color}}>
                  <img 
                    className = 'modal__block-image'
                    src = {BASE_URL + ''  + errorsStartTests.unfinishedExam.logo} 
                    alt = ''
                  />
                  <div className = 'modal__block-name'> {errorsStartTests.unfinishedExam.name_ru} </div>
                </div>
              </div>

              <div className = 'modal__footer'>

                <button onClick = { handleCloseModal } className = 'button button__over'> Отмена </button>
                <Link
                    onClick = { handleCloseModal }
                    className = 'button button__continue'
                    to = {`/start_test/${errorsStartTests.unfinishedExam.uuid}`}> 
                  Продолжить 
                </Link>

              </div>
            </React.Fragment>
            
            :<React.Fragment>
              <div className = 'modal__header'>
                <div className = 'modal__title'> Пожалуйста, обратите внимание. </div>
              </div>

              <div className = 'modal__content'>
                <div className = 'modal__description'> { errorsStartTests.errorMessage } </div>
              </div>
              
              
            </React.Fragment>}

            {duringTheTest &&
            <div className = 'modal__footer'> 
              <Link onClick = { handleCloseModal } to = {`/`} className = 'button button__over'> Отмена </Link>
            </div>}
        
        </div>
      </div>

      { duringTheTest && <div className = 'modal__empty'></div> }
    </React.Fragment>
    
  )
}

export default Modal;