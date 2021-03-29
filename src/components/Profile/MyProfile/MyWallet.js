import React from 'react';
import kaspi from '../../../assets/images/kaspi.jpg';
import cls from './MyProfile.module.css';

const MyWallet = () => {
  return (
    <div className = {cls.my}>
      <div className = {cls.header}>
        <div className = {cls.title}> Мой кошелек </div>
        <div className = {cls.money}> Баланс: 5000 KZT </div>
      </div>
      <hr className={cls.hr} />

      <div className = {cls.content_wallet}>
        <div className = {cls.sub__title}> Инструкция пополнение баланса </div>

        <div className = {cls.description__block}>
          <img src = { kaspi } alt = '' />
          <div className = {cls.description__steps}>
            <div className = {cls.step}> 1. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.  </div>
            <div className = {cls.step}> 2. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.  </div>
            <div className = {cls.step}> 3. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.  </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default MyWallet;