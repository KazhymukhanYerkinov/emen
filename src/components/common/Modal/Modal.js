import React from 'react';
import { Link } from 'react-router-dom';

import cls from './Modal.module.css';



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
      <div className={cls.modal}>
        <div className={cls.modal__inner}>
          { isUnfinished ?
            <React.Fragment>
              <div className = {cls.modal__title}> Продолжить тестирования </div>
              <div className = {cls.modal__desc}> {errorsStartTests.errorMessage} </div>

              <div className = {cls.block} style = {{ backgroundColor:  errorsStartTests.unfinishedExam.color}}>
                <img 
                  className = {cls.image}
                  src = {BASE_URL + ''  + errorsStartTests.unfinishedExam.logo} 
                  alt = ''
                />
                <div className = {cls.name}> {errorsStartTests.unfinishedExam.name_ru} </div>
              </div>
              <Link
                  onClick = { handleCloseModal }
                  className = {cls.continue__button}
                  to = {`/start_test/${errorsStartTests.unfinishedExam.uuid}`}> 
                Продолжить 
              </Link>
            </React.Fragment>
            
            :<React.Fragment>
              <div className = {cls.modal__title}> Пожалуйста, обратите внимание. </div>
              <div className = {cls.modal__desc}> { errorsStartTests.errorMessage } </div>
            </React.Fragment>}

            {duringTheTest
            ?<Link onClick = { handleCloseModal } to = {`/`} className = {cls.during__test__button}> Отмена </Link>
            :<button onClick = { handleCloseModal } className = {cls.close__button}> Отмена </button>}

        </div>
      </div>

      { duringTheTest && <div className = {cls.empty__content}></div> }
    </React.Fragment>
    
  )
}

export default Modal;