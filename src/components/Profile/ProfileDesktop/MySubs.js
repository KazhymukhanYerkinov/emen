import React from 'react';

import gold from '../../../assets/subs/gold.svg'


const MySubs = () => {
  return (
      <div className = 'my-profile'>
        <div className = 'my-profile__header'>
          <div className = 'my-profile__title'> Мой подписка </div>
        </div>

        <hr className = 'my-profile__hr'/>

        <div className = 'my-profile__content'>

          <div className = 'my-subs'>
            <div className = 'my-subs_header'>
              <div className = 'my-subs_info'>
                <img src = {gold} alt = '' />
                <div className = 'my-subs_name'> GOLD </div>
              </div>

              <div className = 'my-subs_name'> Осталось: 4 дней </div>
            </div>

            <div className = 'my-subs_content'>
              <div className = 'my-subs_description'> Осталось колличество попыток ЕНТ экзаменов: 3 </div>
              <div className = 'my-subs_description'> Осталось колличество попыток экзаменов по предметам: 3 </div>
              <div className = 'my-subs_description'> Осталось колличество попыток экзаменов по темам: 3 </div>

            </div>
          </div>

          


        </div>

      </div>
    )
}

export default MySubs