import React from 'react';

const Block = ({ count, text, desc }) => {
    return (
        <div className = 'section3__block'>
            <div className = 'section3__block-inner'>
                <div className = 'content__block-count'> {count}+ </div>
                <div className = 'content__block-text'> {text} </div>
                <div className = 'content__block-subtext'> {desc} </div>
            </div>
        </div>
    )
}   
export default Block;