import React from 'react';

import AccountDetailsReduxForm from './ProfileForms/AccountDetailsForm';
import PersonalDataReduxForm from './ProfileForms/PersonalDataForm';
import SecurityReduxForm from './ProfileForms/SecurityForm';


const MyProfile = (props) => {
  

  const onSubmitSecurity = (formData) => {
    props.changePasswordProfile(formData.old_password, formData.new_password, formData.confirm_password);
  }

  let initialValuesPersonal = {
    name: props.user.first_name,
    surname: props.user.last_name,
    telephone: props.user.phone,
    city: props.user.city ? props.user.city.id: '',

    city_name: props.user.city ? props.user.city.name: ''
  }

  return (
    <div className='my-profile'>

      <div className='my-profile__header'>
        <div className='my-profile__title'> Мой профиль </div>
      </div>

      <hr className='my-profile__hr' />

      <div className='my-profile__content'>
        <AccountDetailsReduxForm 
          user = { props.user }
          changeEmailProfile = { props.changeEmailProfile }

          change_email = { props.change_email }
          changeEmailAc = { props.changeEmailAc }
        />
        <PersonalDataReduxForm 
          cities = { props.cities }
          initialValues = { initialValuesPersonal } 

          updatePersonalProfile = { props.updatePersonalProfile }
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