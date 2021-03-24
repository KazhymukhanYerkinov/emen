import React from 'react';

import compas from '../../../../assets/logos/compas.svg';
import NavSubject from './NavSubject/NavSubject';

import cls from './Navigator.module.css';
import classNames from 'classnames';



const Navigator = () => {
  const [ showNavigatorQuestion, setShowNavigatorQuestion ] = React.useState(0);
  const [ navigatorCompas, setNavigatorCompas ] = React.useState(false);

  const handleNavigatorQuestions = (navigator_id) => {
    setShowNavigatorQuestion((prevState) => {
      if (navigator_id === prevState) {
        return null;
      }
      return navigator_id;
    })
  }

  const handleNavigatorCompas = () => {
    setNavigatorCompas((prevState) => !prevState);
  }

  

  

  return (
    <div className = {cls.navigator}>
      <div className = {cls.navigator__header}>
        <div className = {cls.navigator__title}> Навигация </div>
        <div className = {cls.compas} onClick = { handleNavigatorCompas }>
          <img src = { compas } alt = '' />
        </div>
      </div>
      <div className = {classNames(cls.nav__subject, {[cls.active]: navigatorCompas})}>
        <NavSubject
          id = { 0 }

          showNavigatorQuestion = { showNavigatorQuestion }
          handleNavigatorQuestions = { handleNavigatorQuestions }
        />
        <NavSubject
          id = { 1 }

          showNavigatorQuestion = { showNavigatorQuestion }
          handleNavigatorQuestions = { handleNavigatorQuestions }
        />
        <NavSubject
          id = { 2 }

          showNavigatorQuestion = { showNavigatorQuestion }
          handleNavigatorQuestions = { handleNavigatorQuestions }
        />
        <NavSubject
          id = { 3 }

          showNavigatorQuestion = { showNavigatorQuestion }
          handleNavigatorQuestions = { handleNavigatorQuestions }
        />
      </div>

    </div>
  )
}

export default Navigator;