import React from 'react';

import cls from './ErrorModal.module.css';

const ErrorModal = ({ setShowError }) => {
    return (
        <div className = {cls.error}>
            <div className = {cls.error__inner}>
                <div className = {cls.error__title}> Ошибка! </div>
                <button className = {cls.error__button} onClick = {() => setShowError(false)}> Отмена </button>
            </div>
        </div>
    )
}
export default ErrorModal;