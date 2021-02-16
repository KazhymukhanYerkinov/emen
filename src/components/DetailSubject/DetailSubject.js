import React from 'react';
import DetailHeader from './DetailHeader/DetailHeader';


import cls from './DetailSubject.module.css';

const DetailSubject = () => {
    return (
        <div className = {cls.detail}>
            <div className = 'container'>
                <DetailHeader />
            </div>
        </div>
    )
}

export default DetailSubject;