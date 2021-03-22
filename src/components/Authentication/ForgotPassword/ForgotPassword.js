import React from 'react';
import { Field, reduxForm } from 'redux-form';

import forgot from '../../../assets/images/forgot.jpg';
import loader from '../../../assets/loader/button__loader.svg';


import { emailRequired } from '../../../validators/validator';
import { InputText } from '../../common/FormControl/FormControl';

import cls from './ForgotPassword.module.css';


const ForgotPasswordForm = ({ handleSubmit, error, showFetchButton }) => {
    return (
        <>
        <form onSubmit = { handleSubmit }>
            <div className = {cls.forgot__input}>

                <div className = {cls.forgot__step}> 1. Проверка почты </div>
                <Field name = { 'email' } component = { InputText } label = { 'Email' } validate = { emailRequired } />
                {error && <span className = {cls.error}> { error } </span>}
                <button className = 'button submit' type = 'submit'> {showFetchButton ? <img className = {cls.loader} src = { loader } alt = '' />: <span>Далее</span>} </button>

            </div>
        </form>
        </>
    )
}
const ForgotPasswordReduxForm = reduxForm({ form: 'forgot' })(ForgotPasswordForm);

const ForgotPassword = ({ emailResetConfirmThunk }) => {
    const [ showFetchButton, setShowFetchButton ] = React.useState(false);
    const onSubmit = (formData) => {
        setShowFetchButton(true);
        emailResetConfirmThunk(formData.email).finally(() => {
            setShowFetchButton(false);
        })
    }
    return (
        <div className = {cls.forgot}>
            <div className = 'container'>
                <div className = {cls.forgot__inner}>

                    <div className = {cls.forgot__image}>
                        <img className = {cls.image} src = { forgot } alt = ""/>
                    </div>

                    <div className = {cls.forgot__content}>
                        <div className = 'title'> Восстановление пароля </div>
                        <ForgotPasswordReduxForm onSubmit = { onSubmit } showFetchButton = { showFetchButton }/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;