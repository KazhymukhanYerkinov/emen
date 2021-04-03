import React from 'react';
import { Avatar } from '@material-ui/core';

import cls from './ProfileInfo.module.css';


const AvatarInfo = (props) => {
  return (
    <div className={cls.profile__info}>
      <Avatar src = {props.user.image ? props.BASE_URL + '' + props.user.image:'' } className={cls.avatar} />

      <div className={cls.info__block}>
        <div className={cls.fullname}> { props.user.first_name } { props.user.last_name } </div>
        <div className={cls.id}> { props.user.code } </div>
      </div>

      <div className={cls.money}> Баланс: { props.user.balance } KZT </div>
    </div>
  )
}

export default AvatarInfo;