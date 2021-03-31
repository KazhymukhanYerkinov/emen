import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { InputPassword } from '../../../common/FormControl/FormControl';
import ProfileHeaderMobile from '../ProfileHeaderMobile/ProfileHeaderMobile';

import cls from './ProfileMobileForms.module.css';


const ChangePasswordForm = () => {
  return (
    <form className = {cls.form}>
      <Field
        full_width
        name = 'password'
        label = 'Пароль'
        component = { InputPassword } 
      />
      <button type = 'submit' className = {cls.submit}> Продолжить </button>
    </form>
  )
}

const ChangePasswordReduxForm = reduxForm({ form: 'mobile_change_password' })(ChangePasswordForm);

const ChangePassword = () => {
  return (
    <React.Fragment>
      <ProfileHeaderMobile isForm />
      <div className={cls.content}>
        <div className = {cls.title}> Введите пароль </div>
        <div className = {cls.description}> Чтобы изменить пароль, введите текущий пароль </div>
        <ChangePasswordReduxForm />
      </div>
    </React.Fragment>
  )
}

export default ChangePassword;