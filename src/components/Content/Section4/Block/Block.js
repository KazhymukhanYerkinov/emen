import React from 'react';
import cls from './Block.module.css';

const Block = ({ step, title, text }) => {
    return (
        <div className = {cls.block}>
            <div className = {cls.block__inner}>
                <div className = {cls.block__step}> { step } </div>
                <div className = {cls.block__title}> { title } </div>
                <div className = {cls.block__text}> { text } </div>
            </div>
        </div>
    )
}

export default Block;