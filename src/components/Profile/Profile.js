import React from 'react';
import { Route } from 'react-router';

import MyProfile from './MyProfile/MyProfile';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyWallet from './MyProfile/MyWallet';
import Help from './MyProfile/Help';

import cls from './Profile.module.css';
import ProfileMobile from './ProfileMobile/ProfileMobile';
import BasicDataMobile from './ProfileMobile/BasicDataMobile/BasicDataMobile';
import WalletMobile from './ProfileMobile/WalletMobile/WalletMobile';
import SubMobile from './ProfileMobile/SubMobile/SubMobile';






const Profile = () => {
  return (
    <React.Fragment>
      <div className={cls.profile}>
        <div className='container'>
          <div className={cls.profile__inner}>
            <ProfileInfo />
            <Route exact path = '/profile/basic_data' component = { MyProfile } />
            <Route exact path = '/profile/wallet' component = { MyWallet } />
            <Route exact path = '/profile/help' component = { Help } />
          </div>
        </div>
      </div>

      <div className = {cls.mobile}>
        <div className = 'container'>
          <div className = {cls.mobile__inner}>
            <Route exact path = '/profile' component = { ProfileMobile } />
          </div>
          <Route exact path = '/profile/basic_data' component = { BasicDataMobile } />
          <Route exact path = '/profile/wallet' component = { WalletMobile } />
          <Route exact path = '/profile/sub' component = { SubMobile } />
        </div>
      </div>

    </React.Fragment>

    
  )
}

export default Profile;