import React from 'react';
import { convertDate } from '../../../utils/convertToDate';


const MySubs = (props) => {
  let { subscription_logo, subscription_name, 
        num_of_full_unt_exams, num_of_subject_exams, 
        num_of_topic_exams, subscription_end_time } = props.auth_data.subscription;

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
                <img src = {props.BASE_URL + '' + subscription_logo } alt = '' />
                <div className = 'my-subs_name'> { subscription_name } </div>
              </div>

              <div className = 'my-subs_name'> Время окончания: { convertDate(subscription_end_time) } </div>
            </div>

            <div className = 'my-subs_content'>
              <div className = 'my-subs_description'> Осталось колличество попыток ЕНТ экзаменов: { num_of_full_unt_exams } </div>
              <div className = 'my-subs_description'> Осталось колличество попыток экзаменов по предметам: { num_of_subject_exams } </div>
              <div className = 'my-subs_description'> Осталось колличество попыток экзаменов по темам: { num_of_topic_exams } </div>

            </div>
          </div>

          


        </div>

      </div>
    )
}

export default MySubs