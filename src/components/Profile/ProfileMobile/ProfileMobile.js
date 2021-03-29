import React from 'react';

import subscribe from '../../../assets/profile__logo/subscribe.svg';
import wallet from '../../../assets/profile__logo/wallet.svg';
import basic_data from '../../../assets/profile__logo/basic_data.svg';
import help from '../../../assets/profile__logo/help.svg';

import cls from '../Profile.module.css';
import { NavLink } from 'react-router-dom';


const ProfileMobile = () => {
    return (
        <div className = {cls.profile__mobile}>
            <div className = {cls.title}> Профиль </div>
            <div className = {cls.mobile__links}>

                <NavLink to = '/profile/basic_data' className = {cls.link__block}>
                    <img src = { basic_data } alt = '' />
                    <div className = {cls.link}> Основные данные </div>
                </NavLink>

                <NavLink to = '/profile/wallet' className = {cls.link__block}>
                    <img src = { wallet } alt = '' />
                    <div className = {cls.link}> Кошелек </div>
                </NavLink>

                <NavLink to = '/profile/sub' className = {cls.link__block}>
                    <img src = { subscribe } alt = '' />
                    <div className = {cls.link}> Подписка </div>
                </NavLink>

                <NavLink to = '/' className = {cls.link__block}>
                    <img src = { help } alt = '' />
                    <div className = {cls.link}> Помощь </div>
                </NavLink>
                
            </div>
        </div>
    )
}

export default ProfileMobile;