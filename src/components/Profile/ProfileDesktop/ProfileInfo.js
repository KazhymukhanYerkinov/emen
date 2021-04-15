import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../common/Avatar';







const ProfileInfo = (props) => {
  return (
    <div className='avatar'>

      <Avatar
        user = { props.user }
        BASE_URL = { props.BASE_URL }
      />

      <div className = 'avatar__navigator'>
        <NavLink className = 'avatar__navigator-link' exact to='/profile' activeClassName='active'> Мой профиль </NavLink>
        <NavLink className = 'avatar__navigator-link' to='/profile/wallet' activeClassName='active'> Мой кошелек </NavLink>
        <NavLink className = 'avatar__navigator-link' to='/profile/help' activeClassName='active'> Помощь </NavLink>
      </div>

    </div>
  )
}

export default ProfileInfo;