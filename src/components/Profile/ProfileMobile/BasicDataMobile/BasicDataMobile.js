import React from 'react';

import AvatarInfo from '../../ProfileDesktop/ProfileInfo/AvatarInfo';
import AccountDetailMobile from './AccountDetailMobile';
import PersonalDataMobile from './PersonalDateMobile';

import cls from './BasicDataMobile.module.css';
import ProfileHeaderMobile from '../ProfileHeaderMobile/ProfileHeaderMobile';
import { connect } from 'react-redux';
import { handleIsRedirectPassword, updatePersonalProfile } from '../../../../redux/profile-reducer';


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

      <AvatarInfo
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

let mapStateTopProps = (state) => ({
  
})

export default connect(mapStateTopProps, {
  updatePersonalProfile,
  handleIsRedirectPassword,
})(BasicDataMobile);

