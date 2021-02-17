import React from 'react';
import cls from './EntContent.module.css';


const EntContent = () => {
    return (
        <div className = { cls.ent }>
            <div className = { cls.ent__title }> Обязательные предметы </div>
            <div className = { cls.ent__desc }> Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.  </div>
        </div>
    )
}

export default EntContent;