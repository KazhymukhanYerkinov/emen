import React from 'react';

import AccountDetailsReduxForm from './ProfileForms/AccountDetailsForm';
import PersonalDataReduxForm from './ProfileForms/PersonalDataForm';
import SecurityReduxForm from './ProfileForms/SecurityForm';

import cls from './MyProfile.module.css';


const MyProfile = () => {
  return (
    <div className={cls.my}>

      <div className={cls.header}>
        <div className={cls.title}> Мой профиль </div>
      </div>

      <hr className={cls.hr} />

      <div className={cls.content}>
        <AccountDetailsReduxForm />
        <PersonalDataReduxForm />
        <SecurityReduxForm />
      </div>

    </div>
  )
}



export default MyProfile;