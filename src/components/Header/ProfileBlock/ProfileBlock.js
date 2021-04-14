import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from 'react-router-dom';

import { data, exit } from '../../../data/profile';

import cls from './ProfileBlock.module.css';


const ProfileBlock = ({ user, handleProfileBlock, handleLogoutModal }) => {

  return (
    <div className={cls.profile}>
      <div className={cls.profile__inner}>

        <div className={cls.profile__info}>
          <Avatar className={cls.avatar} src={ user.image } />
          <div className={cls.info}>
            <div className={cls.name}> {user && <span> {user.first_name} {user.last_name}</span>}</div>
            <div className={cls.id}> {user && <span> {user.code} </span>} </div>
          </div>
        </div>

        <div className={cls.menu}>
          Меню
        </div>

        <div className={cls.profile__route}>
          {data.map((item, index) => {
            return (  
              <NavLink
                key={index}
                to={`/${item.url}`}
                activeClassName = { cls.active }
                className={cls.route} 
                onClick={() => handleProfileBlock(false)}>

                <div className={cls.route__icons}> {item.img} </div>
                <div className={cls.route__text}> {item.title} </div>

              </NavLink>
            )
          })}
          <div className={cls.route} onClick={() => handleLogoutModal(true)}>
            <div className={cls.route__icons}> {exit.img} </div>
            <div className={cls.route__text}> {exit.title} </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default ProfileBlock;