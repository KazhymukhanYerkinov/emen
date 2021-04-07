import React from 'react';

import AvatarInfo from '../../ProfileDesktop/ProfileInfo/AvatarInfo';
import AccountDetailMobile from './AccountDetailMobile';
import PersonalDataMobile from './PersonalDateMobile';

import cls from './BasicDataMobile.module.css';
import ProfileHeaderMobile from '../ProfileHeaderMobile/ProfileHeaderMobile';


const BasicDataMobile = (props) => {

  let initialValues = {
    name: props.user.first_name,
    surname: props.user.last_name,
    telephone: props.user.phone,
    city: props.user.city.name,
  }
  

  return (
    <div className={cls.basic}>
      <ProfileHeaderMobile />

      <AvatarInfo
        user = { props.user }
        BASE_URL = { props.BASE_URL }
      />
      <AccountDetailMobile 
        user = { props.user }
      />
      <PersonalDataMobile
        initialValues = { initialValues }
        cities = { props.cities }
      />
    </div>
  )
}

export default BasicDataMobile;