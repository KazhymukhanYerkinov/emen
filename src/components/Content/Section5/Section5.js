import React from 'react';
import { Link } from 'react-router-dom';

import section5 from '../../../assets/images/section5.jpg';



const Section5 = () => {
    return (
        <div className = 'section5'>
            <div className = "container">
                <div className = 'section5__inner'>

                    <div className = 'section5__image'>
                        <img className = 'image image__80' src = { section5 } alt = "" />
                    </div>

                    <div className = 'section5__content'>
                        <div className = 'content__title'> Начни прямо сейчас готовится к ЕНТ </div>
                        <div className = 'content__description'> Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. </div>
                        
                        <div>
                            <Link to = '/subjects' className = 'button button__start'> Начать бесплатно </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5;