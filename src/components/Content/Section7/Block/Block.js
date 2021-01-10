import React from 'react';
import cls from './Block.module.css';

const Block = ({ image, text }) => {
    return (
        <div className = {cls.block}>
            <div className = {cls.block__inner}>
                <div className = {cls.block__image}>
                    <img src = { image } alt = "" />
                </div>
                <div className = {cls.block__content}>
                    <div className = {cls.block__text}> { text } </div>
                    <div className = {cls.block__insta}> @emenkz </div>
                </div>
            </div>
        </div>
    )
}

export default Block;