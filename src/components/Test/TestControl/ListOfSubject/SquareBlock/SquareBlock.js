import React from 'react';
import classNames from 'classnames';




const SquareBlock = ({ handleScrollQuestionById, isActive, question_id, numeration }) => {

    let squareClass = classNames('navigator__block', {'navigator__block-correct': isActive});


    return (
        <div className = {squareClass} onClick = {() => handleScrollQuestionById(question_id)}>
            { numeration }
        </div>
    )
}

export default SquareBlock;