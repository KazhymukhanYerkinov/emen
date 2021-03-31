import React from 'react';
import cls from './SubBlock.module.css'


const Service = (props) => {
    return (
        <div className = {cls.service}>
            <div className = {cls.service__text}> { props.service.service_name } </div>
            <span className = {cls.circle}></span>
        </div>
    )
}

export default Service;