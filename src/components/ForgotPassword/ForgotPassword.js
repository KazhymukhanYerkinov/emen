import React from 'react';
import { Field, reduxForm } from 'redux-form';

import forgot from '../../assets/images/forgot.jpg';
import { InputText } from '../common/FormControl/FormControl';

import cls from './ForgotPassword.module.css';


const ForgotPasswordForm = () => {
    return (
        <form>
            <div className = {cls.forgot__input}>
                <div className = {cls.forgot__step}> 1. Проверка почты </div>
                <Field name = { 'email' } component = { InputText } label = { 'Email' } />
                <button className = 'button submit'> Далее </button>

            </div>
        </form>
    )
}
const ForgotPasswordReduxForm = reduxForm({ form: 'forgot' })(ForgotPasswordForm);

const ForgotPassword = () => {
    return (
        <div className = {cls.forgot}>
            <div className = 'container'>
                <div className = {cls.forgot__inner}>

                    <div className = {cls.forgot__image}>
                        <img className = {cls.image} src = { forgot } alt = ""/>
                    </div>

                    <div className = {cls.forgot__content}>
                        <div className = 'title'> Восстановление пароля </div>
                        <ForgotPasswordReduxForm />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;