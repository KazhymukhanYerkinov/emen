import React from 'react';

import code from '../../assets/images/verificode.jpg';

import cls from './VerificationCode.module.css';



const VerificationCode = () => {
    return (
        <div className = {cls.code}>
            <div className = 'container'>
                <div className = {cls.code__inner}>
                    <div className = {cls.code__image}>
                        <img src = {  } alt = "" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerificationCode;