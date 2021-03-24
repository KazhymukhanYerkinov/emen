import React from 'react';
import Cookie from 'js-cookie';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import emen from '../../assets/logos/emen.svg';

import cls from './Header.module.css';
import ProfileBlock from './ProfileBlock/ProfileBlock';
import AuthModal from '../common/Modal/AuthModal';


const Header = ({ isAuth, user, logoutThunk, language, setLanguage }) => {

  let location = useLocation();
  const profileRef = React.useRef();
  const toggleButtonRef = React.useRef();

  const [showProfileBlock, setShowProfileBlock] = React.useState(false);
  const [logout, setLogout] = React.useState(false);

  const onHandleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(profileRef.current) && !path.includes(toggleButtonRef.current)) {
      onChangeProfileBlock(false);
    }
  }
  const onChangeProfileBlock = (item) => {
    setShowProfileBlock(item);
  }

  React.useEffect(() => {
    document.body.addEventListener('click', onHandleOutsideClick);

    return () => document.body.removeEventListener('click', onHandleOutsideClick);
  }, []);

  const onChangeFunction = (lang) => {
    setLanguage(lang);
    Cookie.set('lang', lang, { expires: 30 });
  }

  const handleLogoutModal = (isLogout) => {
    setLogout(isLogout)
  }

  const handleLogoutOK = () => {
    
    handleLogoutModal(false);
    logoutThunk();

  }

  const isLang = language === 'kz';

  return (
    <header className={cls.header}>
      <div className="container">
        <div className={cls.header__inner}>


          <Link to={'/'}>
            <img className={cls.image} src={emen} alt="" />
          </Link>

          <div className={classNames(cls.header__nav, { [cls.active]: showProfileBlock, [cls.full__width]: !isAuth })}>

            {!isAuth && <nav className={cls.nav}>
              <Link to={'/'} className={classNames(cls.nav__link, { [cls.active]: location.pathname === '/' })} onClick={() => onChangeProfileBlock(false)}> О платформе </Link>
              <Link to={'/subjects'} className={classNames(cls.nav__link, { [cls.active]: location.pathname.includes('/subjects') })} onClick={() => onChangeProfileBlock(false)}> Предметы </Link>
              <Link to={'/subs'} className={classNames(cls.nav__link, { [cls.active]: location.pathname.includes('/subs') })} onClick={() => onChangeProfileBlock(false)}> Подписка </Link>
            </nav>}

            <div className={cls.last}>

              <div className={classNames(cls.last__lang, { [cls.change__lang]: isAuth })}>
                <span className={classNames(cls.lang__link, { [cls.lang_active]: isLang })} onClick={() => onChangeFunction('kz')}> Қаз </span>
                <span className={classNames(cls.lang__link, { [cls.lang_active]: !isLang })} onClick={() => onChangeFunction('ru')}> Рус </span>
              </div>

              {!isAuth && <div className={cls.last__auth}>
                <Link to={'/registration'} className={cls.signup} onClick={() => onChangeProfileBlock(false)}> Регистрация </Link>
                <Link to={'/login'} className={ cls.signin } onClick={() => onChangeProfileBlock(false)}> Войти </Link>
              </div>}

              <div ref={profileRef}>
                {isAuth && <div className={cls.profile} onClick={() => onChangeProfileBlock(!showProfileBlock)}>
                  <div className={cls.profile__name}> {user && <span> {user.first_name} {user.last_name[0]}. </span>} </div>
                  <div className={cls.profile__avatar}> <Avatar alt={user && user.first_name} src="" /> </div>
                  <ArrowDropDownIcon className={classNames(cls.profile__icons, { [cls.rotate]: showProfileBlock })} />
                </div>}

                {isAuth && showProfileBlock && <ProfileBlock
                  handleLogoutModal = { handleLogoutModal }
                  user={user}
                  logoutThunk={logoutThunk}
                  onChangeProfileBlock={onChangeProfileBlock} />}
              </div>

              {logout && 
              <AuthModal
                handleLogoutOK = { handleLogoutOK }
                handleLogoutModal = { handleLogoutModal }
              />}

            </div>
          </div>

          <button ref={toggleButtonRef} className={classNames(cls.header__toggle, { [cls.active]: showProfileBlock })}
            onClick={() => onChangeProfileBlock(!showProfileBlock)}>

            <span className={cls.toggle__item}> MENU </span>

          </button>

        </div>
      </div>
    </header>
  )
}


export default Header;