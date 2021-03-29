import React from 'react';

import ProfileHeaderMobile from '../ProfileHeaderMobile/ProfileHeaderMobile';
import kaspi from '../../../../assets/images/kaspi.jpg';

import cls from './WalletMobile.module.css';


const WalletMobile = () => {
    return (
        <div className = {cls.wallet__mobile}>
            <ProfileHeaderMobile />
            <div className = {cls.title}> Инструкция пополнение баланса </div>
            <img className = {cls.kaspi__image} src = { kaspi } alt = '' />

            <div className = {cls.steps}>
                <div className = {cls.step}> 1. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.  </div>
                <div className = {cls.step}> 1. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. </div>
                <div className = {cls.step}> 1. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. </div>
            </div>
            
        </div>
    )
}

export default WalletMobile;