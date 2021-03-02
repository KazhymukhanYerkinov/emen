import React from 'react';
import loader from '../../../assets/logos/loader.svg';
import cls from './Preloader.module.css';



const Preloader = () => {
    return (
        <div className = {cls.preloader}>
            <div className = {cls.preloader__inner}>
                <img src = { loader } alt = ""/>
            </div>
        </div>
    )
}

export default Preloader;