import React from 'react';
import { Avatar } from '@material-ui/core';

import cls from './ProfileInfo.module.css';


const AvatarInfo = () => {
  return (
    <div className={cls.profile__info}>
      <Avatar className={cls.avatar} />

      <div className={cls.info__block}>
        <div className={cls.fullname}> Duman Toktar </div>
        <div className={cls.id}> id123456789 </div>
      </div>

      <div className={cls.money}> Баланс: 5000 KZT </div>
    </div>
  )
}

export default AvatarInfo;