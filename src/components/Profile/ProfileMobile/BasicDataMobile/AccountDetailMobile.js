import React from 'react';
import { NavLink } from 'react-router-dom';

import arrow from '../../../../assets/detail/arrow.svg';

import cls from './BasicDataMobile.module.css';


const AccountDetailMobile = () => {
    return (
        <div className = {cls.accound__mobile}>
            <div className = {cls.account__title}> Данные учетной записи </div>

            <div className = {cls.group}>
                <small className = {cls.mobile__label}> ID пользователя </small>
                <div className = {cls.mobile__input}> id123456789 </div>
            </div>

            <NavLink to = '/profile/basic_data/change_email' className = {cls.group}>
                <small className = {cls.mobile__label}> Email </small>
                <div className = {cls.mobile__input}> 
                    <div>dumantoktarov@gmail.com</div>
                    <img src = { arrow } alt = '' />
                </div>
                
            </NavLink>

            <NavLink to = '/profile/basic_data/change_password' className = {cls.group}>
                <small className = {cls.mobile__label}> Пароль </small>
                <div className = {cls.mobile__input}> 
                    <div>Последний изменений в 21.01.21 </div>
                    <img src = { arrow } alt = '' />
                </div>
            </NavLink>
        </div>
    )
}

export default AccountDetailMobile;