import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { emailRequired } from '../../../../../validators/validator';
import { InputText } from '../../../../common/FormControl/FormControl';


import cls from './ProfileForms.module.css';



const AccountDetailsForm = (props) => {


  return (
    <form className={cls.account__details} onSubmit = { props.handleSubmit }>
      <div className={cls.sub__title}> Данные учетной записи </div>
      <div className={cls.form__groups}>

        <div className={cls.group}>
          <small className={cls.mobile__label}> ID пользователя </small>
          <div className={cls.mobile__input}> {props.user.code} </div>
        </div>

        {!props.editMode
        ? <div className={cls.group}>
            <small className={cls.mobile__label}> Email </small>
            <div className={cls.mobile__input}> {props.user.email} </div>
            <div className = {cls.change__text} onClick = {() => props.setEditMode(true)}> Изменить email </div>
          </div>

        : <Field
            half_width
            not_label
            name='email'
            component={InputText}
            label='Email'
            validate={emailRequired}
          />
        }

      </div>
      {props.editMode && 
      <div className={cls.button}>
        <button className={cls.submit} type={'submit'}> Продолжить  </button>
      </div>}
    </form>
  )
}
const AccountDetailsReduxForm = reduxForm({ form: 'account_details' })(AccountDetailsForm);

const AccountDetails = (props) => {

  const [editMode, setEditMode] = React.useState(false);


  const onSubmit = (formData) => {
    console.log(formData);
    setEditMode(false);
  }

  return (
    <AccountDetailsReduxForm
      user = { props.user } 
      initialValues = { props.initialValues }
      onSubmit = { onSubmit }

      editMode = { editMode }
      setEditMode = { setEditMode }
    />
  )
}

export default AccountDetails;