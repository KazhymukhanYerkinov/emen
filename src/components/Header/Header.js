import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar'; 
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'; 

import emen from '../../assets/logos/emen.svg';
import avatar from '../../assets/profile/avatar.jpg';

import cls from './Header.module.css';
import ProfileBlock from './ProfileBlock/ProfileBlock';


const Header = () => {

    let location = useLocation();

    const [ toggle, setToggle ] = React.useState(false);
    const [ showProfile, setShowProfile ] = React.useState(false);

    const onClick = () => {
        setToggle(!toggle);
    }
    const onShowProfilePopup = () => {
        setShowProfile(!showProfile);
    }

    const is_auth = false;
    
    return (
        <header className = {cls.header}>
            <div className = "container">
                <div className = {cls.header__inner}>

                    <Link to = {'/'}>
                        <img className ={cls.image} src = { emen } alt = "" />
                    </Link>
                    
                    <div className = {classNames(cls.header__nav, {[cls.active]: toggle, [cls.full__width]: is_auth})}>
                        {is_auth && <nav className = {cls.nav}>
                            <Link to = {'/'} className = {classNames(cls.nav__link, {[cls.active]: location.pathname === '/'})} onClick = { onClick }> О платформе </Link>
                            <Link to = {'/subjects'} className = {classNames(cls.nav__link, {[cls.active]: location.pathname.includes('/subjects')})} onClick = { onClick }> Предметы </Link>
                            <Link to = {'/subs'} className = {classNames(cls.nav__link, {[cls.active]: location.pathname.includes('/subs')})} onClick = { onClick }> Подписка </Link>
                        </nav>}

                        <div className = {cls.last}>

                            <div className = {classNames(cls.last__lang, {[cls.change__lang]: !is_auth})}>
                                <span className = {cls.lang__link}> Қаз </span>
                                <span className = {cls.lang__link}> Рус </span>
                            </div>

                            {is_auth && <div className = {cls.last__auth}>
                                <Link to = {'/registration'} className = {cls.signup} onClick = { onClick }> Регистрация </Link>
                                <Link to = {'/login'} className = {classNames('button', cls.signin)} onClick = { onClick }> Войти </Link>
                            </div>}

                            {!is_auth &&  <div className = {cls.profile} onClick = { onShowProfilePopup }>
                                <div className = {cls.profile__name}> Kazhymukhan Y. </div>
                                <div className = {cls.profile__avatar}> <Avatar alt="Kazhymukhan Yerkinov" src = { avatar } /> </div>
                                <ArrowDropDownIcon className = {classNames(cls.profile__icons, {[cls.rotate]: showProfile})} />
                            </div>}
                            
                            {!is_auth && ((showProfile || toggle) && <ProfileBlock />)}

                        </div>
                    </div>

                    <button className = {classNames(cls.header__toggle, {[cls.active]: toggle})}
                            onClick = { onClick }>
                        <span className = {cls.toggle__item}> MENU </span>
                    </button>

                </div>
            </div>
        </header>
    )
}

export default Header;