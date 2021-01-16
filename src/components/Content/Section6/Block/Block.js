import React from 'react';
import classNames from 'classnames';

import cls from './Block.module.css';


const Block = ({ text, result }) => {

    const [ showAnswer, setShowAnswer ] = React.useState(false);

    const onClick = () => {
        
        setShowAnswer(!showAnswer);
    }

    return (
        <div className = {cls.block} onClick = { onClick }>
            <div className = {cls.block__inner}>
                <div className = {cls.block__question}> { text } </div>
                <span className = {classNames(cls.block__collapse, {[cls.active]: showAnswer})}> </span>
            </div>
            <div className = {classNames(cls.block__answer, {[cls.active]: showAnswer})}> { result } </div>
        </div>
    )
}

export default Block;