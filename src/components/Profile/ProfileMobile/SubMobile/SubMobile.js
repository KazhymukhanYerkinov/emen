import React from 'react';
import gold from '../../../../assets/subs/gold.svg'
import ProfileHeaderMobile from '../ProfileHeaderMobile/ProfileHeaderMobile';
import cls from './SubMobile.module.css';


const SubMobile = () => {
    return (
        <div className = {cls.sub__mobile}>
            <ProfileHeaderMobile />
            
            <div className = {cls.my_sub}>
                <div className = {cls.my_sub_info}>
                    <img src = {gold} alt = '' />
                    <div className = { cls.my_sub_name }> GOLD </div>
                </div>

                <div className = {cls.my_sub_time}> Осталось: 4 дней   </div>

                <div>
                    <div className = {cls.my_sub_description}> Осталось колличество попыток ЕНТ экзаменов: 3 </div>
                    <div className = {cls.my_sub_description}> Осталось колличество попыток экзаменов по предметам: 3 </div>
                    <div className = {cls.my_sub_description}> Осталось колличество попыток экзаменов по темам: 3 </div>

                </div>
            </div>
        </div>
    )
}

export default SubMobile;