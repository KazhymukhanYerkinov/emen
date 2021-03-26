import React from 'react';
import { NavLink } from 'react-router-dom';

import notfound from '../../assets/images/notfound.jpg';

import cls from './NotFound.module.css';


const NotFound = () => {
  return (
    <div className = { cls.notfound }>
      <div className = 'container'>
        <div className = { cls.notfound__inner }>
            <div>
              <img className = {cls.notfound__image} src = { notfound } alt = '' />
              <div className = {cls.notfound__text}>
                Кажется Вы заблудились, ничего страшного. <br />
                Всегда можно вернуться в <NavLink to = '/' className = {cls.link}> главную страницу </NavLink>
              </div>
            </div>
        </div>
      </div>
    </div> 
  )
}

export default NotFound;