import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import avatar from '../../../assets/profile/avatar.jpg';
import exit from '../../../assets/profile/logout.svg';

import { data } from '../../../data/profile';

import cls from './ProfileBlock.module.css'


const ProfileBlock = ({ user, logoutThunk, onChangeProfileBlock }) => {

    

    
    const onLogoutProfile = () => {
        onChangeProfileBlock(false);
        logoutThunk();
    }

    

    return (
        <div className={cls.profile}>
            <div className={cls.profile__inner}>

                <div className={cls.profile__info}>
                    <Avatar className={cls.avatar} src = { avatar } style = {{ width: '65px', height: '65px' }}/>
                    <div className = {cls.info}>
                        <div className={cls.name}> { user && <span> { user.first_name } </span> }</div>
                        <div className={cls.id}> id180103277 </div>
                    </div>
                </div>

                <div className = {cls.profile__route}>
                    {data.map((item, index) => {
                        return (
                            <Link className = {cls.route} to = {`/${item.url}`} key = { index } onClick = {() => onChangeProfileBlock(false)}>
                                <div className = {cls.route__icons}> { item.img } </div>
                                <div className = {cls.route__text}> { item.title } </div>
                            </Link>
                        )
                    })}
                    <div className = {cls.route} onClick = { onLogoutProfile }>
                        <img src = { exit } alt = "" className = { cls.route__icons }/>
                        <div className = {cls.route__text}> Выйти </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ProfileBlock;