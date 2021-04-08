import React from 'react';

const Block = ({ step, title, text }) => {
    return (
        <div className = 'section4__block'>
            <div className = 'section4__block-inner'>
                <div className = 'content__block-count'> { step } </div>
                <div className = 'content__block-title mt-10'> { title } </div>
                <div className = 'content__block-description'> { text } </div>
            </div>
        </div>
    )
}

export default Block;