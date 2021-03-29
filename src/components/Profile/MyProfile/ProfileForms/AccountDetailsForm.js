import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { emailRequired } from '../../../../validators/validator';
import { InputText } from '../../../common/FormControl/FormControl';


import cls from './ProfileForms.module.css';



const AccountDetailsForm = () => {
  return (
    <form className={cls.account__details}>
      <div className={cls.sub__title}> Данные учетной записи </div>
      <div className={cls.form__groups}>
        <Field readOnly profile__input name='id' component={InputText} label='ID пользователя' />
        <Field profile__input name='email' component={InputText} label='Email' validate = { emailRequired } />
      </div>
      <div className = {cls.button}>
        <button className={cls.submit} type={'submit'}> Сохранить  </button>
      </div>
    </form>
  )
}
const AccountDetailsReduxForm = reduxForm({ form: 'account_details' })(AccountDetailsForm);

export default AccountDetailsReduxForm;