import React from 'react';
import { Route } from 'react-router';


// Profile desktop components
import MyProfile from './ProfileDesktop/MyProfile/MyProfile';
import ProfileInfo from './ProfileDesktop/ProfileInfo/ProfileInfo';
import MyWallet from './ProfileDesktop/MyProfile/MyWallet';
import Help from './ProfileDesktop/MyProfile/Help';

// Profile mobile components
import ProfileMobile from './ProfileMobile/ProfileMobile';
import BasicDataMobile from './ProfileMobile/BasicDataMobile/BasicDataMobile';
import WalletMobile from './ProfileMobile/WalletMobile/WalletMobile';
import SubMobile from './ProfileMobile/SubMobile/SubMobile';
import ChangePassword from './ProfileMobile/ProfileMobileForms/ChangePassword';
import ChangeEmail from './ProfileMobile/ProfileMobileForms/ChangeEmail';
import NewPassword from './ProfileMobile/ProfileMobileForms/NewPassword';


import cls from './Profile.module.css';







const Profile = () => {
  return (
    <React.Fragment>
      <div className={cls.profile}>
        <div className='container'>
          <div className={cls.profile__inner}>
            <ProfileInfo />
            <Route exact path = '/profile' component = { MyProfile } />
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
          <Route exact path = '/profile/basic_data/change_password' component = { ChangePassword } />
          <Route exact path = '/profile/basic_data/change_password/:uid/:token' component = { NewPassword } />
          <Route exact path = '/profile/basic_data/change_email' component = { ChangeEmail } />

        </div>
      </div>

    </React.Fragment>

    
  )
}

export default Profile;