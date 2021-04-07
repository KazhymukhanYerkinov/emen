import React from 'react';

import AccountDetailsReduxForm from './ProfileForms/AccountDetailsForm';
import PersonalDataReduxForm from './ProfileForms/PersonalDataForm';
import SecurityReduxForm from './ProfileForms/SecurityForm';

import cls from './MyProfile.module.css';


const MyProfile = (props) => {
  
  const onSubmitPersonal = (formData) => {
    props.updatePersonalProfile(formData.name, formData.surname, formData.telephone, formData.city, null)
    console.log(formData.name, formData.surname, formData.telephone, formData.city.id);
  }

  const onSubmitSecurity = (formData) => {
    console.log(formData.new_password, formData.confirm_password);
  }

  let initialValuesAccount = {
    email: props.user.email,
  }

  let initialValuesPersonal = {
    name: props.user.first_name,
    surname: props.user.last_name,
    telephone: props.user.phone,
    city: props.user.city,
  }

  console.log(initialValuesAccount);
  console.log(initialValuesPersonal);

  return (
    <div className={cls.my}>

      <div className={cls.header}>
        <div className={cls.title}> Мой профиль </div>
      </div>

      <hr className={cls.hr} />

      <div className={cls.content}>
        <AccountDetailsReduxForm 
          user = { props.user }
          initialValues = { initialValuesAccount } 
        />
        <PersonalDataReduxForm 
          cities = { props.cities }
          initialValues = { initialValuesPersonal } 

          onSubmit = { onSubmitPersonal }
        />
        <SecurityReduxForm 
          convert_date = { props.convert_date }
          
          onSubmit = { onSubmitSecurity }
        />
      </div>

    </div>
  )
}



export default MyProfile;