import React from 'react';
import classNames from 'classnames';

import cls from '../ListOfSubject.module.css';



const SquareBlock = ({ handleScrollQuestionById, isActive, question_id, numeration }) => {

    let squareClass = classNames(cls.block, {[cls.active]: isActive});


    return (
        <div className = {squareClass} onClick = {() => handleScrollQuestionById(question_id)}>
            { numeration }
        </div>
    )
}

export default SquareBlock;