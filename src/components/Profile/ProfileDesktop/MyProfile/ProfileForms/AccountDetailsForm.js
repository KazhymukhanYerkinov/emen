import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { emailRequired, textRequired } from '../../../../../validators/validator';
import { InputPassword, InputText } from '../../../../common/FormControl/FormControl';


import cls from './ProfileForms.module.css';



const AccountDetailsForm = (props) => {


  return (
    <form className={cls.account__details} onSubmit = { props.handleSubmit }>
      <div className={cls.sub__title}> Данные учетной записи </div>
      {props.error && <div className = {cls.info_text}> { props.error } </div>}
      <div className={cls.form__groups}>

          <div className={cls.group}>
            <small className={cls.mobile__label}> ID пользователя </small>
            <div className={cls.mobile__input}> {props.user.code} </div>
          </div>

          <div className={cls.group}>
            <small className={cls.mobile__label}> Email </small>
            <div className={cls.mobile__input}> {props.user.email} </div>
            <div className = {cls.change__text} onClick = { props.changeEmailAc }> {props.change_email ? 'Отменить':'Изменить email'} </div>
          </div>

         {props.change_email && 
         <React.Fragment>
         <Field
            half_width
            not_label
            name='email'
            component={InputText}
            label='Новый email'
            placeholder = 'Новый email'
            validate={emailRequired}
            setChangePassword = { props.changeEmailAc }
          />
          <Field
             half_width
             not_label
             name='current_password'
             component={ InputPassword }
             label='Пароль'
             placeholder = 'Пароль'
             validate={ textRequired }
             setChangePassword = { props.changeEmailAc }
          />
          </React.Fragment>
          }
      </div>
      
      {props.change_email && <div className={cls.button}>
        <button className={cls.submit} type='submit'> Изменить email  </button>
      </div>}

    </form>
  )
}

const AccountDetailsReduxForm = reduxForm({ form: 'account_details' })(AccountDetailsForm);

const AccountDetails = (props) => {

  const onSubmit = (formData) => {
    props.changeEmailProfile(formData.email, formData.current_password);
  }

  return (
    <AccountDetailsReduxForm
      user = { props.user } 

      changeEmailAc = { props.changeEmailAc }
      change_email = { props.change_email }
      onSubmit = { onSubmit }

    />
  )
}

export default AccountDetails;