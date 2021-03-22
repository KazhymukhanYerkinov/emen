import React from 'react';
import { compose } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import loader from '../../../assets/loader/button__loader.svg';
import confirm from '../../../assets/images/confirm.jpg';
import { LengthCreator, passwordRequired, textRequired } from '../../../validators/validator';
import { InputPassword } from '../../common/FormControl/FormControl';

import cls from './ConfirmPassword.module.css';


const lengthvalidation = LengthCreator(8, 100);

const ConfirmPasswordForm = ({ showFetchButton, handleSubmit }) => {
    return (
        <form onSubmit = { handleSubmit }>
            <div className = {cls.inputs}>
                <Field name = {'password1'} component = { InputPassword } label = {'Создать новый пароль'} validate = { [textRequired, passwordRequired, lengthvalidation] }/>
                <Field name = {'password2'} component = { InputPassword } label = {'Повторить пароль'} validate = { [textRequired, passwordRequired, lengthvalidation] }/>
                <button className = 'button submit' type = 'submit'> {showFetchButton ? <img className = {cls.loader} src = { loader } alt = '' />: <span>Создать</span>} </button>    
            </div>
        </form>
    )
}
const ConfirmPasswordReduxForm = reduxForm({ form: 'confirm' })(ConfirmPasswordForm)

const ConfirmPassword = ({ match, fromRegisterPage, passwordResetConfirmThunk }) => {
    const [ showFetchButton, setShowFetchButton ] = React.useState(true);

    
    const onSubmit = (formData) => {
        setShowFetchButton(true);
        passwordResetConfirmThunk(match.params.uid, match.params.token, formData.password1, formData.password2).finally(() => {
            setShowFetchButton(false);
        })
    }

    if (fromRegisterPage !== 0) {
        return <Redirect to = '/success' />
    }
    return (
        <div className = {cls.confirm}>
            <div className = 'container'>
                <div className = {cls.confirm__inner}>

                    <div className = {cls.confirm__image}>
                        <img src = { confirm } alt = ''/>
                    </div>

                    <div className = {cls.confirm__content}>
                        <div className = 'title'> Восстановление пароля </div>
                        <div className = {cls.step}> 1. Cоздать новый пароль </div>
                        <ConfirmPasswordReduxForm onSubmit = { onSubmit } showFetchButton = { showFetchButton }/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default compose(withRouter)(ConfirmPassword);