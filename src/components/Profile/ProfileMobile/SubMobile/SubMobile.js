import React from 'react';
import { convertDate } from '../../../../utils/convertToDate';
import ProfileHeaderMobile from '../ProfileHeaderMobile/ProfileHeaderMobile';
import cls from './SubMobile.module.css';


const SubMobile = (props) => {
    let { subscription_logo, subscription_name, 
        num_of_full_unt_exams, num_of_subject_exams, 
        num_of_topic_exams, subscription_end_time } = props.auth_data.subscription;
    
    return (
        <div className = {cls.sub__mobile}>
            <ProfileHeaderMobile />
            
            <div className = {cls.my_sub}>
                <div className = {cls.my_sub_info}>
                    <img src = {props.BASE_URL + '' + subscription_logo} alt = '' />
                    <div className = { cls.my_sub_name }> { subscription_name } </div>
                </div>

                <div className = {cls.my_sub_time}> Время окончания: { convertDate(subscription_end_time) }   </div>

                <div>
                    <div className = {cls.my_sub_description}> Осталось колличество попыток ЕНТ экзаменов: { num_of_full_unt_exams } </div>
                    <div className = {cls.my_sub_description}> Осталось колличество попыток экзаменов по предметам: { num_of_subject_exams } </div>
                    <div className = {cls.my_sub_description}> Осталось колличество попыток экзаменов по темам: { num_of_topic_exams } </div>

                </div>
            </div>
        </div>
    )
}

export default SubMobile;