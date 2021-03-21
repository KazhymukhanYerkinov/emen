import React from 'react';
import { Link } from 'react-router-dom';

import cls from './ErrorModal.module.css';

const ErrorModal = ({ errorsStartTests, BASE_URL, handleErrorModal }) => {
  const isUnfinished = errorsStartTests.unfinishedExam ? true : false;

  return (
    <div className={cls.error}>
      <div className={cls.error__inner}>
        {isUnfinished ?
          <React.Fragment>
            <div className={cls.error__title}> Продолжить тестирования  </div>
            <div className={cls.error__desc}> {errorsStartTests.errorMessage} </div>

            <div className={cls.block} style={{ backgroundColor: errorsStartTests.unfinishedExam.color }}>
              <img className={cls.image} src={BASE_URL + '' + errorsStartTests.unfinishedExam.logo} alt='' />
              <div className={cls.name}> {errorsStartTests.unfinishedExam.name_ru} </div>
            </div>

            <Link
              to = {`/start_test/${errorsStartTests.unfinishedExam.uuid}`}
              className={cls.continue__button}
              onClick={handleErrorModal}
            >
              Продолжить
            </Link>


          </React.Fragment>
          : <React.Fragment>
            <div className={cls.error__title}> Пожалуйста, обрати внимание. </div>
            <div className={cls.error__desc}> {errorsStartTests.errorMessage} </div>
          </React.Fragment>}
        <button className={cls.continue__button} onClick={handleErrorModal}> Отмена </button>
      </div>
    </div>
  )
}
export default ErrorModal;