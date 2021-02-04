import React from 'react';
import cls from './Block.module.css';

const Block = ({ title, text, image }) => {
    return (
        <div className = {cls.block}>
            <div className = {cls.block__inner}>
                <div className = {cls.block__header}>
                    <div className = {cls.block__title}> { title } </div>
                    <div className = {cls.block__text}> { text } </div>
                </div>

                <div className = {cls.block__image}>
                    <img className = {cls.image} src = { image } alt = "block picturee" />
                </div>
            </div>
        </div>
    )
}

export default Block;