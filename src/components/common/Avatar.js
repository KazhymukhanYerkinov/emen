import React from 'react';
import { Avatar } from '@material-ui/core';



const AvatarInfo = (props) => {
  return (
    <div className = 'avatar__block'>
      <Avatar src = {props.user.image ? props.BASE_URL + '' + props.user.image:'' } className='avatar__image' />

      <div>
        <div className='avatar__fullname'> { props.user.first_name } { props.user.last_name } </div>
        <div className='avatar__id'> { props.user.code } </div>
      </div>

      <div className='avatar__money'> Баланс: { props.user.balance } KZT </div>
    </div>
  )
}

export default AvatarInfo;