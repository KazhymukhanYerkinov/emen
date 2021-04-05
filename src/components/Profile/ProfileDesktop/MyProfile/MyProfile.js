import React from 'react';

import AccountDetailsReduxForm from './ProfileForms/AccountDetailsForm';
import PersonalDataReduxForm from './ProfileForms/PersonalDataForm';
import SecurityReduxForm from './ProfileForms/SecurityForm';

import cls from './MyProfile.module.css';


const MyProfile = (props) => {
  const onSubmitAccount = (formData) => {
    console.log(formData.email);
  }

  const onSubmitPersonal = (formData) => {
    console.log(formData.name, formData.surname, formData.telephone, formData.city);
  }

  const onSubmitSecurity = (formData) => {
    console.log(formData.new_password, formData.confirm_password);
  }

  return (
    <div className={cls.my}>

      <div className={cls.header}>
        <div className={cls.title}> Мой профиль </div>
      </div>

      <hr className={cls.hr} />

      <div className={cls.content}>
        <AccountDetailsReduxForm 
          user = { props.user }
          initialValues = { props.initialValues } 

          onSubmit = { onSubmitAccount }
        />
        <PersonalDataReduxForm 
          cities = { props.cities }
          initialValues = { props.initialValues } 

          onSubmit = { onSubmitPersonal }
        />
        <SecurityReduxForm 
          initialValues = { props.initialValues }
          convert_date = { props.convert_date }
          onSubmit = { onSubmitSecurity }
        />
      </div>

    </div>
  )
}



export default MyProfile;