import React from 'react';

import AccountDetailsReduxForm from './ProfileForms/AccountDetailsForm';
import PersonalDataReduxForm from './ProfileForms/PersonalDataForm';
import SecurityReduxForm from './ProfileForms/SecurityForm';

import cls from './MyProfile.module.css';


const MyProfile = (props) => {
  
  const onSubmitPersonal = (formData) => {
    props.updatePersonalProfile(formData.name, formData.surname, formData.telephone, formData.city)
  }

  const onSubmitSecurity = (formData) => {
    console.log(formData.old_password, formData.new_password, formData.confirm_password);
    props.changePasswordProfile(formData.old_password, formData.new_password, formData.confirm_password);
  }

  let initialValuesAccount = {
    email: props.user.email,
  }

  let initialValuesPersonal = {
    name: props.user.first_name,
    surname: props.user.last_name,
    telephone: props.user.phone,
    city: props.user.city.id,

    city_name: props.user.city.name
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
          initialValues = { initialValuesAccount } 
        />
        <PersonalDataReduxForm 
          cities = { props.cities }
          initialValues = { initialValuesPersonal } 
          onSubmit = { onSubmitPersonal }
        />
        <SecurityReduxForm 
          change_password = { props.change_password }
          changePasswordAC = { props.changePasswordAC }
          
          convert_date = { props.convert_date }
          onSubmit = { onSubmitSecurity }
        />
      </div>

    </div>
  )
}



export default MyProfile;