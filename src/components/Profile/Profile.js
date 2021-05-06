import React from 'react';
import { Route } from 'react-router';


// Profile desktop components
import MyProfileContainer from './ProfileDesktop/MyProfile/MyProfileContainer';
import ProfileInfo from './ProfileDesktop/ProfileInfo';
import MyWallet from './ProfileDesktop/MyWallet';

// Profile mobile components
import ProfileMobile from './ProfileMobile/ProfileMobile';
import BasicDataMobile from './ProfileMobile/BasicDataMobile/BasicDataMobile';
import WalletMobile from './ProfileMobile/WalletMobile/WalletMobile';
import SubMobile from './ProfileMobile/SubMobile/SubMobile';
import ChangePassword from './ProfileMobile/ProfileMobileForms/ChangePassword';
import ChangeEmail from './ProfileMobile/ProfileMobileForms/ChangeEmail';


import cls from './Profile.module.css';
import ProfileActivate from './ProfileActivate';
import MySubs from './ProfileDesktop/MySubs';

const Profile = (props) => {
  
  return (
    <React.Fragment>

      { props.screen_orientation ?
      <div className={cls.profile}>
        <div className='container'>
          <div className={cls.profile__inner}>
            <ProfileInfo 
              user = { props.user }
              BASE_URL = { props.BASE_URL }
            />

            <Route 
              exact path = '/profile' 
              render = {() =>  (
                <MyProfileContainer
                  user = { props.user }
                  cities = { props.cities }
                /> 
              )} 
            />

            <Route 
              exact path = '/profile/basic_data' 
              render = { () => (
                <MyProfileContainer
                  user = { props.user }
                  cities = { props.cities }
                />
              )} />

            
            <Route exact path = '/profile/wallet' render = {() =>  (
              <MyWallet
                amount_data = { props.amount_data }
                upBalance = { props.upBalance } 
              />
            )} />

            <Route exact path = '/profile/subscription' render = {() => (
              <MySubs 
                auth_data = { props.auth_data }
                BASE_URL = { props.BASE_URL }
              />
            )} />



            <Route exact path = '/profile/email/activate/:uid/:token' component = { ProfileActivate } />
          </div>
        </div>
      </div>

      :<div className = {cls.mobile}>
        <div className = 'container'>
          <div className = {cls.mobile__inner}>
            <Route exact path = '/profile' component = { ProfileMobile } />
          </div>
          <Route 
            exact path = '/profile/basic_data' 
            render = {() => (
              <BasicDataMobile
                user = { props.user }
                cities = { props.cities }
                BASE_URL = { props.BASE_URL }
              /> 
            )} />
          <Route exact path = '/profile/wallet' render = {() => (
            <WalletMobile
              amount_data = { props.amount_data }
              upBalance = { props.upBalance }
            /> 
          )} />
          
          <Route exact path = '/profile/subscription' render = {() => (
            <SubMobile
              auth_data = { props.auth_data }
              BASE_URL = { props.BASE_URL } 
            />
          ) } />
          <Route exact path = '/profile/basic_data/change_password' component = { ChangePassword } />
          <Route exact path = '/profile/basic_data/change_email' component = { ChangeEmail } />


        </div>
      </div>}

    </React.Fragment>

    
  )
}

export default Profile;