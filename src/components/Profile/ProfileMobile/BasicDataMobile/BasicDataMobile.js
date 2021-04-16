import React from 'react';


import AccountDetailMobile from './AccountDetailMobile';
import PersonalDataMobile from './PersonalDateMobile';

import cls from './BasicDataMobile.module.css';
import ProfileHeaderMobile from '../ProfileHeaderMobile/ProfileHeaderMobile';
import { connect } from 'react-redux';
import { handleIsRedirectPassword, updatePersonalProfile } from '../../../../redux/profile-reducer';
import Avatar from '../../../common/Avatar';




const BasicDataMobile = (props) => {

  let initialValues = {
    name: props.user.first_name,
    surname: props.user.last_name,
    telephone: props.user.phone,
    city: props.user.city.id,

    city_name: props.user.city.name
  }
  

  return (
    <div className={cls.basic}>
      <ProfileHeaderMobile />

      <Avatar
        user = { props.user }
        BASE_URL = { props.BASE_URL }
      />
      <AccountDetailMobile 
        user = { props.user }
        handleIsRedirectPassword = { props.handleIsRedirectPassword }
      />
      <PersonalDataMobile
        initialValues = { initialValues }
        cities = { props.cities }

        updatePersonalProfile = { props.updatePersonalProfile }
      />
    </div>
  )
}



export default connect(null, {
  updatePersonalProfile,
  handleIsRedirectPassword,
})(BasicDataMobile);

