import React from 'react';
import { NavLink } from 'react-router-dom';

import arrow from '../../../../assets/detail/arrow.svg'

import cls from './ProfileHeaderMobile.module.css';


const ProfileHeaderMobile = (props) => {
    return (
        <div className = {cls.header}>
            <div className = {cls.header__inner}>
                
                { props.isForm

                ?<NavLink to = '/profile/basic_data' className = {cls.back}>
                    <div className = {cls.name}> Отмена </div>
                </NavLink>

                :<NavLink to = '/profile' className = {cls.back}>
                    <img src = { arrow } alt = '' />
                    <div className = {cls.name}> Профиль </div>
                 </NavLink>}
            </div>
        </div>
    )
}

export default ProfileHeaderMobile;