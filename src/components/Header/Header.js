import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import ProfileBlock from './ProfileBlock/ProfileBlock';
import AuthModal from '../common/Modal/AuthModal';

import emen from '../../assets/logos/emen.svg';

import cls from './Header.module.css';



const Header = (props) => {

  const isLang = props.language === 'kz';


  return (
    <header className={cls.header}>
      <div className="container">
        <div className={cls.header__inner}>


          <NavLink to={'/'}>
            <img className={cls.image} src={emen} alt="" />
          </NavLink>

          <div className={classNames(cls.header__nav, { [cls.active]: props.show_profile_block, [cls.full__width]: !props.isAuth })}>

            {!props.isAuth && 
            <nav className={cls.nav}>

              <NavLink 
                exact to={'/'} 
                className={ cls.nav__link } 
                activeClassName = {cls.active } 
                onClick={() => props.handleProfileBlock(false)}>
                О платформе
              </NavLink>
              
              <NavLink 
                to={'/subjects'} 
                className={cls.nav__link }
                activeClassName = {cls.active } 
                onClick={() => props.handleProfileBlock(false)}> 
                Предметы 
              </NavLink>

              <NavLink 
                to={'/subs'} 
                className={ cls.nav__link }
                activeClassName = {cls.active }
                onClick={() => props.handleProfileBlock(false)}> 
                Подписка 
              </NavLink>

            </nav>}

            <div className={cls.last}>

              <div className={classNames(cls.last__lang, { [cls.change__lang]: props.isAuth })}>

                <span 
                  className={classNames(cls.lang__link, { [cls.lang_active]: isLang })} 
                  onClick={() => props.handleLanguageChange('kz')}> 
                  Қаз 
                </span>

                <span 
                  className={classNames(cls.lang__link, { [cls.lang_active]: !isLang })} 
                  onClick={() => props.handleLanguageChange('ru')}> 
                  Рус 
                </span>

              </div>

              {!props.isAuth && 
              <div className={cls.last__auth}>

                <NavLink 
                  to={'/registration'} 
                  className='button button__sign button__sign--up' 
                  onClick={() => props.handleProfileBlock(false)}> 
                  Регистрация 
                </NavLink>

                <NavLink 
                  to={'/login'}
                  className = 'button button__sign'
                  onClick={() => props.handleProfileBlock(false)}> 
                  Войти 
                </NavLink>

              </div>}

              <div ref={props.profile_block_ref}>
                {props.isAuth && 
                <div className={cls.profile} onClick={() => props.handleProfileBlock(!props.show_profile_block)}>

                  <div 
                    className={cls.profile__name}> 
                    {props.user && 
                    <span> 
                      {props.user.first_name} {props.user.last_name[0]}. 
                    </span>} 
                  </div>

                  <div 
                    className={cls.profile__avatar}> 
                    {props.user &&
                    <Avatar alt={props.user && props.user.first_name} src={props.user.image} />}
                  </div>

                  <ArrowDropDownIcon className={classNames(cls.profile__icons, { [cls.rotate]: props.show_profile_block })} />
                </div>}

                { props.isAuth && 
                  props.show_profile_block && 
                  <ProfileBlock
                    user={ props.user }
                    handleLogoutModal = { props.handleLogoutModal }
                    handleProfileBlock = { props.handleProfileBlock }
                  />
                }
              </div>

              {
                props.logout && 
                <AuthModal
                  pressTheOkButton = { props.pressTheOkButton }
                  handleLogoutModal = { props.handleLogoutModal }
                />
              }

            </div>
          </div>

          <button 
            ref={props.toggle_button_ref} 
            className={classNames(cls.header__toggle, { [cls.active]: props.show_profile_block })}
            onClick={() => props.handleProfileBlock(!props.show_profile_block)}>
            <span className={cls.toggle__item}> MENU </span>
          </button>

        </div>
      </div>
    </header>
  )
}


export default Header;