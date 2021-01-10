import React from 'react';
import cls from './Block.module.css';

const Block = ({ count, text, desc }) => {
    return (
        <div className = {cls.block}>
            <div className = {cls.block__inner}>
                <div className = {cls.block__count}> {count}+ </div>
                <div className = {cls.block__text}> {text} </div>
                <div className = {cls.block__desc}> {desc} </div>
            </div>
        </div>
    )
}   
export default Block;