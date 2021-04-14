import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { changePasswordProfile } from '../../../../redux/profile-reducer';
import { LengthCreator, passwordRequired, textRequired } from '../../../../validators/validator';
import { InputPassword } from '../../../common/FormControl/FormControl';
import ProfileHeaderMobile from '../ProfileHeaderMobile/ProfileHeaderMobile';

import cls from './ProfileMobileForms.module.css';


const lengthValidation = LengthCreator(8, 100);

const ChangePasswordForm = (props) => {
  return (
    <form className={cls.form} onSubmit = { props.handleSubmit }>
      <div>
        <Field
          full_width
          name='old_password'
          label='Старый пароль'
          component={InputPassword}
          validate = { textRequired }
        />

        <Field
          full_width
          name='new_password'
          label='Новый пароль'
          component={InputPassword}
          validate = {[ textRequired, lengthValidation, passwordRequired ]}
        />

        <Field
          full_width
          name='confirm_password'
          label='Павторите пароль'
          component={InputPassword}
          validate = {[ textRequired, lengthValidation, passwordRequired ]}
        />
      </div>
      <button type='submit' className={cls.submit}> Изменить пароль </button>
    </form>
  )
}

const ChangePasswordReduxForm = reduxForm({ form: 'security' })(ChangePasswordForm);

const ChangePassword = (props) => {

  const onSubmit = (formData) => {
    props.changePasswordProfile(formData.old_password, formData.new_password, formData.confirm_password);
  }

  if (!props.isRedirectPassword) {
    return <Redirect to = '/profile/basic_data'/>
  }

  return (
    <React.Fragment>
      <ProfileHeaderMobile isForm />
      <div className={cls.content}>
        <div className={cls.title}> Введите пароль </div>
        <div className={cls.description}> Чтобы изменить пароль, введите текущий пароль </div>
        <ChangePasswordReduxForm
          onSubmit = { onSubmit } 
        />
      </div>
    </React.Fragment>
  )
}
let mapStateTopProps = (state) => ({
  isRedirectPassword: state.profilePage.isRedirectPassword,
});


export default connect(mapStateTopProps, {
  changePasswordProfile,
})(ChangePassword);