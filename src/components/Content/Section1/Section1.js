import React from 'react';
import { Link } from 'react-router-dom';

import intro from '../../../assets/images/intro.jpg';
// import start from '../../../assets/logos/start.svg';
import scroll from '../../../assets/logos/scroll.svg';

const Section1 = () => {

    return (
        <div className = 'content'>
            <div className = "container">
                <div className = 'content__inner'>

                    <div className = 'content__section1-content'>
                        <div className = 'content__title'> Онлайн платформа для подготовки к ЕНТ </div> 
                        <div className = 'content__description'> Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает. </div>
                        <div className = 'content__section1-flex'>
                            <Link to = {'/subjects'} className = 'button button__start'> Начать бесплатно </Link>
                        </div>
                    </div>

                    <div className = 'content__section1-image'>
                        <img className = 'image image__80' src = { intro } alt = ""/>
                    </div>
                    
                    <div className = 'content__section1-scroll'>
                        <img src = { scroll } alt = ""/>
                    </div>

                </div>

                
            </div>
        </div>
    )
}   

export default Section1;