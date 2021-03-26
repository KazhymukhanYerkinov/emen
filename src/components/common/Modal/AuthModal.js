import React from 'react';
import { Link } from 'react-router-dom';

import cls from './Modal.module.css';



const AuthModal = (props) => {
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
      }, [])

    return (
        <div className = {cls.modal}>
            <div className = {cls.modal__inner}>
                <div className = {cls.modal__title}> Вы действительно хотите выйти? </div>

                <div className = {cls.logout__block}>
                    <button className = {cls.logout__cancel__button} onClick = {() => props.handleLogoutModal(false)}> Отмена </button>
                    <Link to = '/' className = {cls.logout__ok__button} onClick = { props.pressTheOkButton }> OK </Link>
                </div>
            </div>
        </div>
    )
}

export default AuthModal;