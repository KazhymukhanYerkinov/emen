import React from 'react';
import { Link } from 'react-router-dom';

import intro from '../../../assets/images/intro.jpg';
import scroll from '../../../assets/logos/scroll.svg';

const Section1 = () => {

    return (
        <div className = 'section1'>
            <div className = "container">
                <div className = 'section1__inner'>

                    <div className = 'section1__content'>
                        <div className = 'section1__title'> Онлайн платформа для подготовки к ЕНТ </div> 
                        <div className = 'section1__description'> Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает. </div>
                        <div className = 'section1__flex'>
                            <Link to = {'/subjects'} className = 'button button__start'> Начать бесплатно </Link>
                        </div>
                    </div>

                    <div className = 'section1__image'>
                        <img className = 'image image__80' src = { intro } alt = ""/>
                    </div>
                    
                    <div className = 'section1__scroll'>
                        <img src = { scroll } alt = ""/>
                    </div>

                </div>

                
            </div>
        </div>
    )
}   

export default Section1;