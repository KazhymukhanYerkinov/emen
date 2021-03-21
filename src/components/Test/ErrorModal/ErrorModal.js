import React from 'react';
import { NavLink } from 'react-router-dom';

import cls from './ErrorModal.module.css';


const ErrorModal = ({ errorsStartTests, handleShowError }) => {
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, []);

    return (
        <React.Fragment>
            <div className = {cls.modal}>
                <div className = {cls.modal__inner}>
                    <div className = {cls.title}> Пожалуйста, обрати внимание. </div>
                    <div className = {cls.desc}> {errorsStartTests.errorMessage} </div>

                    <NavLink to = '/' className = {cls.button} onClick = { handleShowError }> Отмена </NavLink>
                </div>
            </div>

            <div className = {cls.content}> </div>
        </React.Fragment>
    )
}

export default ErrorModal;