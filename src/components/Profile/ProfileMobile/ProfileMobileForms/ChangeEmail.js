import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { textRequired } from '../../../../validators/validator';
import { InputText } from '../../../common/FormControl/FormControl';

import ProfileHeaderMobile from '../ProfileHeaderMobile/ProfileHeaderMobile';

import cls from './ProfileMobileForms.module.css';

const ChangeEmailForm = () => {
  return (
    <form className = {cls.form}>
      <Field
        full_width
        not_label
        name = 'email' 
        component = { InputText }
        label = 'Новый email'
        validate = { textRequired }
      />

      <button type = 'submit' className = {cls.submit}> Продолжить </button>
    </form>
  )
}

const ChangeEmailReduxForm = reduxForm({ form: 'mobile_change_email' })(ChangeEmailForm)

const ChangeEmail = () => {
    return (
      <React.Fragment>
        <ProfileHeaderMobile isForm />
        <div className = {cls.content}>
          <div className = {cls.title}> Введите новый email </div>
          <div className = {cls.description}> Ваш текущий email:  dum...@gmail.com </div>
          <ChangeEmailReduxForm />
        </div>
      </React.Fragment>
    )
}

export default ChangeEmail;