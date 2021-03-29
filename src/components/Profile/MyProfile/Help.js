import React from 'react';
import cls from './MyProfile.module.css';


const Help = () => {
    return (
        <div className = { cls.my }>
            <div className = {cls.header}>
                <div className = { cls.title }> Помощь </div>
            </div>
            <hr className={cls.hr} />
        </div>
    )
}

export default Help;