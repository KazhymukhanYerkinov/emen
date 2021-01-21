import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

import { data } from '../../../data/profile';

import cls from './ProfileBlock.module.css'



const ProfileBlock = () => {
    return (
        <div className={cls.profile}>
            <div className={cls.profile__inner}>

                <div className={cls.profile__info}>
                    <Avatar className={cls.avatar} />
                    <div className = {cls.info}>
                        <div className={cls.name}> Kazhymukhan Yerkinov </div>
                        <div className={cls.id}> id180103277 </div>
                    </div>
                </div>

                <div className = {cls.profile__route}>
                    {data.map((item, index) => {
                        return (
                            <Link className = {cls.route} to = {`/${item.url}`}>
                                <div className = {cls.route__icons}> { item.img } </div>
                                <div className = {cls.route__text}> { item.title } </div>
                            </Link>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}
export default ProfileBlock;