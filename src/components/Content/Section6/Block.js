import React from 'react';
import classNames from 'classnames';


const Block = ({ text, result }) => {

    const [ showAnswer, setShowAnswer ] = React.useState(false);

    const onClick = () => {
        
        setShowAnswer(!showAnswer);
    }

    return (
        <div className = 'section6__block' onClick = { onClick }>
            <div className = 'section6__block-inner'>
                <div className = 'content__block-question'> { text } </div>
                <span className = {classNames('section6__block-collapse', {'active': showAnswer})}> </span>
            </div>
            <div className = {classNames('content__block-answer', {'active': showAnswer})}> { result } </div>
        </div>
    )
}

export default Block;