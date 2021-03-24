import React from 'react';
import classNames from 'classnames';

import arrow from '../../../../../assets/detail/arrow.svg';
import bio from '../../../../../assets/subjects/bio.svg';

import cls from '../Navigator.module.css';


const NavSubject = (props) => {
  let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  let is_open = props.showNavigatorQuestion === props.id;

  // arrow image
  let clx = classNames(cls.nav__subject__arrow, {[cls.active__arrow]: is_open});

  return (
    <div className = {cls.nav_subject}>

      <div className = {cls.nav__subject__header} onClick = { () => props.handleNavigatorQuestions(props.id) }>
        <div className = {cls.nav__subject__arrow}>
          <img className = {cls.nav__subject__image} src = { bio } alt = '' />
          <div className = {cls.nav__subject__info}>
            <div className = {cls.info__name}> Биология </div>
            <div className = {cls.info__result}> Результат: 15/40 </div>
          </div>
        </div>
        <img className = {clx} src = { arrow } alt = '' />
      </div>



      {is_open && <div className = {cls.square__blocks}>
        { list.map((item, index) => (
          <div className = {cls.block} key = { index }>
            { item }
          </div>
        )) }
      </div>}
    </div>
  )
}

export default NavSubject