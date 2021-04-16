import React from 'react';
import kaspi from '../../../assets/images/kaspi.jpg';

const MyWallet = () => {
  return (
    <div className = 'my-profile'>

      <div className = 'my-profile__header'>
        <div className = 'my-profile__title'> Мой кошелек </div>
      </div>

      <hr className = 'my-profile__hr'/>

      <div className = 'my-profile__content'>
        <div className = 'my-profile__subtitle'> Инструкция пополнение баланса </div>

        <div className = 'my-profile__block'>
          <img className = 'image image__40' src = { kaspi } alt = '' />
          <div>
            <div className = 'my-profile__step'> 1. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.  </div>
            <div className = 'my-profile__step'> 2. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.  </div>
            <div className = 'my-profile__step'> 3. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.  </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default MyWallet;