import React from 'react';
import { NavLink } from 'react-router-dom';

import arrow from '../../../../assets/detail/arrow.svg';
import { convertDate } from '../../../../utils/convertToDate';

import cls from './BasicDataMobile.module.css';


const AccountDetailMobile = (props) => {
    
    let convert_date = convertDate(props.user.password_change_date);

    return (
        <div className = {cls.accound__mobile}>
            <div className = {cls.account__title}> Данные учетной записи </div>

            <div className = {cls.group}>
                <small className = {cls.mobile__label}> ID пользователя </small>
                <div className = {cls.mobile__input}> {props.user.code} </div>
            </div>

            <NavLink to = '/profile/basic_data/change_email' className = {cls.group}>
                <small className = {cls.mobile__label}> Email </small>
                <div className = {cls.mobile__input}> 
                    <div> { props.user.email } </div>
                    <img src = { arrow } alt = '' />
                </div>
                
            </NavLink>

            <NavLink to = '/profile/basic_data/change_password' className = {cls.group}>
                <small className = {cls.mobile__label}> Пароль </small>
                <div className = {cls.mobile__input}> 
                    <div>Последний изменений в {convert_date} </div>
                    <img src = { arrow } alt = '' />
                </div>
            </NavLink>
        </div>
    )
}

export default AccountDetailMobile;