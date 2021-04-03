import React from 'react';
import cls from '../MyProfile/MyProfile.module.css';


const Help = () => {
    return (
        <div className = { cls.my }>
            <div className = {cls.header}>
                <div className = { cls.title }> Помощь </div>
            </div>
            <hr className={cls.hr} />

            <div> Көмектеседі деп ойлап қалдың ба? Уахахаха </div>
        </div>
    )
}

export default Help;