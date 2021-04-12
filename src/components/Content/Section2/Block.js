import React from 'react';


const Block = ({ title, text, image }) => {
    return (
        <div className = 'section2__block'>
            <div className = 'section2__block-inner'>
                <div>
                    <div className = 'content__block-title'> { title } </div>
                    <div className = 'content__block-description'> { text } </div>
                </div>

                <div>
                    <img className = 'image image__70' src = { image } alt = "block picturee" />
                </div>
            </div>
        </div>
    )
}

export default Block;