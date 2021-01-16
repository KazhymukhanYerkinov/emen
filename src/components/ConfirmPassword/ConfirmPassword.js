import React from 'react';
import { Field, reduxForm } from 'redux-form';

import confirm from '../../assets/images/confirm.jpg';
import { InputPassword } from '../common/FormControl/FormControl';

import cls from './ConfirmPassword.module.css';



const ConfirmPasswordForm = () => {
    return (
        <form>
            <div className = {cls.inputs}>
                <Field name = {'password1'} component = { InputPassword } label = {'Создать новый пароль'}/>
                <Field name = {'password2'} component = { InputPassword } label = {'Повторить пароль'}/>
                <button className = 'button submit' type = 'submit'> Создать </button>    
            </div>
        </form>
    )
}
const ConfirmPasswordReduxForm = reduxForm({ form: 'confirm' })(ConfirmPasswordForm)

const ConfirmPassword = () => {
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
                        <ConfirmPasswordReduxForm />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ConfirmPassword;