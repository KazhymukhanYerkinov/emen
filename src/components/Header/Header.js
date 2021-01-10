import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import emen from '../../assets/logos/emen.svg';

import cls from './Header.module.css';


const Header = () => {

    let location = useLocation();

    const [ toggle, setToggle ] = React.useState(false);

    const onClick = () => {
        setToggle(!toggle);
        if (!toggle) {
            document.body.style.overflowY = 'hidden'
        }
        else {
            document.body.style.overflowY = 'scroll'
        }

    }
    
    return (
        <header className = {cls.header}>
            <div className = "container">
                <div className = {cls.header__inner}>

                    <Link to = {'/'}>
                        <img className ={cls.image} src = { emen } alt = "" />
                    </Link>
                    
                    <div className = {classNames(cls.header__nav, {[cls.active]: toggle})}>
                        <nav className = {cls.nav}>
                            <Link to = {'/'} className = {classNames(cls.nav__link, {[cls.active]: location.pathname === '/'})}> О платформе </Link>
                            <Link to = {'/subjects'} className = {classNames(cls.nav__link, {[cls.active]: location.pathname.includes('/subjects')})}> Предметы </Link>
                            <Link to = {'/subs'} className = {classNames(cls.nav__link, {[cls.active]: location.pathname.includes('/subs')})}> Подписка </Link>
                        </nav>

                        <div className = {cls.last}>
                            <div className = {cls.last__lang}>
                                <span className = {cls.lang__link}> Қаз </span>
                                <span className = {cls.lang__link}> Рус </span>
                            </div>

                            <div className = {cls.last__auth}>
                                <Link to = {'/signup'} className = {cls.signup}> Регистрация </Link>
                                <Link to = {'/signin'} className = {classNames('button', cls.signin)}> Войти </Link>
                            </div>
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