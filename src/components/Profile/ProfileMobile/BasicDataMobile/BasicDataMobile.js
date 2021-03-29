import React from 'react';

import AvatarInfo from '../../ProfileInfo/AvatarInfo';
import AccountDetailMobile from './AccountDetailMobile';
import PersonalDataMobile from './PersonalDateMobile';

import cls from './BasicDataMobile.module.css';
import ProfileHeaderMobile from '../ProfileHeaderMobile/ProfileHeaderMobile';


const BasicDataMobile = () => {
    return (
        <div className = {cls.basic}>
            <ProfileHeaderMobile />
            <AvatarInfo />
            <AccountDetailMobile />
            <PersonalDataMobile />
        </div>
    )
}

export default BasicDataMobile;