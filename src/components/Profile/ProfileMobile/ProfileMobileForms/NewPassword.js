import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { InputPassword } from '../../../common/FormControl/FormControl';
import ProfileHeaderMobile from '../ProfileHeaderMobile/ProfileHeaderMobile';

import cls from './ProfileMobileForms.module.css';



const NewPasswordForm = () => {
    return (
        <form className = {cls.form}>
            <div>
            <Field
                full_width
                name = 'password'
                label = 'Пароль'
                component = { InputPassword }
            />
            <Field
                full_width
                name = 'confirm_password'
                label = 'Павторите пароль' 
                component = { InputPassword }
            />
            </div>

            <button className = {cls.submit}> Продолжить </button>
        </form>
    )
}
const NewPasswordReduxForm = reduxForm({ form: 'mobile_new_password' })(NewPasswordForm)

const NewPassword = () => {
    return (
        <React.Fragment>
            <ProfileHeaderMobile isForm />
            <div className = {cls.content}>
                <div className = {cls.title}> Новый пароль </div>
                <div className = {cls.description}> Придумайте пароль, который вы не забудете </div>
                <NewPasswordReduxForm />
            </div>
        </React.Fragment>
    )
}

export default NewPassword;