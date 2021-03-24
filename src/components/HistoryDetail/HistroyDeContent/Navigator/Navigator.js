import React from 'react';

import NavSubject from './NavSubject/NavSubject';

import cls from './Navigator.module.css';



const Navigator = () => {
  return (
    <div className = {cls.navigator}>
      <div className = {cls.navigator__title}> Навигация </div>
      <NavSubject />
      <NavSubject />
      <NavSubject />
      <NavSubject />
      <NavSubject />


    </div>
  )
}

export default Navigator;