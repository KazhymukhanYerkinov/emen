import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { changeEmailProfile } from '../../../../redux/profile-reducer';
import { emailRequired, textRequired } from '../../../../validators/validator';
import { InputPassword, InputText } from '../../../common/FormControl/FormControl';

import ProfileHeaderMobile from '../ProfileHeaderMobile/ProfileHeaderMobile';

import cls from './ProfileMobileForms.module.css';

const ChangeEmailForm = (props) => {
  return (
    <form className={cls.form} onSubmit = { props.handleSubmit }>
      
      <div>
        {props.error && <div className = {cls.info}> { props.error } </div>}

        <Field
          full_width
          not_label
          name='email'
          placeholder = 'Новый email'
          component={InputText}
          label='Новый email'
          validate={ emailRequired }
        />

        <Field
          full_width
          not_label
          name='current_password'
          component={ InputPassword }
          label='Пароль'
          validate={textRequired}
        />
      </div>



      <button type='submit' className={cls.submit}> Изменить email </button>
    </form>
  )
}

const ChangeEmailReduxForm = reduxForm({ form: 'account_details' })(ChangeEmailForm)

const ChangeEmail = (props) => {

  const onSubmit = (formData) => {
    props.changeEmailProfile(formData.email, formData.current_password);
  }

  return (
    <React.Fragment>
      <ProfileHeaderMobile isForm />
      <div className={cls.content}>
        <div className={cls.title}> Введите новый email </div>
        <div className={cls.description}> Ваш текущий email:  dum...@gmail.com </div>
        <ChangeEmailReduxForm
          onSubmit = { onSubmit }
        />
      </div>
    </React.Fragment>
  )
}


export default connect(null, {
  changeEmailProfile,
})(ChangeEmail);
