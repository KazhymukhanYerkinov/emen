import React from 'react';
import ProfileHeaderMobile from '../ProfileHeaderMobile/ProfileHeaderMobile';
import cls from './SubMobile.module.css';


const SubMobile = () => {
    return (
        <div className = {cls.sub__mobile}>
            <ProfileHeaderMobile />
            Подписка page
        </div>
    )
}

export default SubMobile;