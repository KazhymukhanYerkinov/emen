import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { emailRequired } from '../../../../../validators/validator';
import { InputText } from '../../../../common/FormControl/FormControl';


import cls from './ProfileForms.module.css';



const AccountDetailsForm = () => {
  return (
    <form className={cls.account__details}>
      <div className={cls.sub__title}> Данные учетной записи </div>
      <div className={cls.form__groups}>

        <div className={cls.group}>
          <small className={cls.mobile__label}> ID пользователя </small>
          <div className={cls.mobile__input}> id123456789 </div>
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
const AccountDetailsReduxForm = reduxForm({ form: 'account_details' })(AccountDetailsForm);

export default AccountDetailsReduxForm;