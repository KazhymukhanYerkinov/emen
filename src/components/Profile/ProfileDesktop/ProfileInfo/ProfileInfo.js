import React from 'react';
import { NavLink } from 'react-router-dom';

import AvatarInfo from './AvatarInfo';

import cls from './ProfileInfo.module.css';





const ProfileInfo = (props) => {
  return (
    <div className={cls.info}>

      <AvatarInfo
        user = { props.user }
        BASE_URL = { props.BASE_URL }
      />

      <div className={cls.profile__navigator}>
        <NavLink className={cls.link} exact to='/profile' activeClassName={cls.active}> Мой профиль </NavLink>
        <NavLink className={cls.link} to='/profile/wallet' activeClassName={cls.active}> Мой кошелек </NavLink>
        <NavLink className={cls.link} to='/profile/help' activeClassName={cls.active}> Помощь </NavLink>
      </div>

    </div>
  )
}

export default ProfileInfo;