import React from 'react';
import { Link} from 'react-router-dom';

import success from '../../assets/images/success.jpg';
import check from '../../assets/logos/success.svg';

import cls from './Success.module.css';


const Success = ({ fromRegisterPage, setRedirectSuccessPage }) => {

    

    return (
        <div className = {cls.success}>
            <div className = 'container'>
                <div className = {cls.success__inner}>

                    <div className = {cls.success__image}>
                        <img src = { success } alt = ""/>
                    </div>

                    <div className = {cls.success__content}>
                        <img className = {cls.image} src = { check } alt = ""/>
                        <div className = {cls.success__title}>
                             {fromRegisterPage >= 1 ? <span> Поздравляем, Вы успешно зарегистрировались! </span>:
                                <span> Поздравляем, Ваш пароль был успешно изменен! </span>}
                        </div>
                        <Link to = '/login'>
                            <button className = 'button submit' onClick = {() => setRedirectSuccessPage(0)}> Войти </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success;