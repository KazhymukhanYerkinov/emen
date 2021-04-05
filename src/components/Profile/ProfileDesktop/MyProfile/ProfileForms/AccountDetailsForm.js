import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { emailRequired } from '../../../../../validators/validator';
import { InputText } from '../../../../common/FormControl/FormControl';


import cls from './ProfileForms.module.css';



const AccountDetailsForm = (props) => {
  console.log('RENDER ACCOUNT')
  return (
    <form className={cls.account__details} onSubmit = { props.handleSubmit }>
      <div className={cls.sub__title}> Данные учетной записи </div>
      <div className={cls.form__groups}>

        <div className={cls.group}>
          <small className={cls.mobile__label}> ID пользователя </small>
          <div className={cls.mobile__input}> {props.user.code} </div>
        </div>

        <Field
          half_width
          name='email'
          component={InputText}
          label='Email'
          validate={emailRequired}
        />

      </div>
      <div className={cls.button}>
        <button className={cls.submit} type={'submit'}> Продолжить  </button>
      </div>
    </form>
  )
}
const AccountDetailsReduxForm = reduxForm({ form: 'account_details', enableReinitialize: true })(AccountDetailsForm);

export default AccountDetailsReduxForm;