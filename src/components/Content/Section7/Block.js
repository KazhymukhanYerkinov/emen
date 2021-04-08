import React from 'react';


const Block = ({ image, text }) => {
    return (
        <div className = 'section7__block'>
            <div className = 'section7__block-inner'>
                <div className = 'image'>
                    <img src = { image } alt = "" />
                </div>
                <div className = 'section7__block-content'>
                    <div className = 'content__block-insta'> { text } </div>
                    <div className = 'content__block-main'> @emenkz </div>
                </div>
            </div>
        </div>
    )
}

export default Block;