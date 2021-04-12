import React from 'react';
import classNames from 'classnames';

import { smoothCollapse } from '../../../utils/smoothCollapse';


const Block = ({ text, result, index }) => {

    const [ showAnswer, setShowAnswer ] = React.useState(false);

    const onClick = (id) => {
        
        setShowAnswer(!showAnswer);
        smoothCollapse(id);
    }

    return (
        <div className = 'section6__block' onClick = { () => onClick(`smooth__collapse_${index}`) }>
            <div className = 'section6__block-inner'>
                <div className = 'content__block-question'> { text } </div>
                <span className = {classNames('section6__block-collapse', {'active': showAnswer})}> </span>
            </div>
            <div id = {`smooth__collapse_${index}`} className = 'content__block-answer'> <div>{ result }</div> </div>
        </div>
    )
}

export default Block;