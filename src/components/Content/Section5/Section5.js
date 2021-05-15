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
                        <div className = 'content__title'> ҰБТ-ға дайындықты дәл қазірден бастаңыз </div>
                        <div className = 'content__description'> ҰБТ-ға дайындықты дәл қазірден бастап, өзің қалаған кез-келген оқу орныңа түс. </div>
                        
                        <div>
                            <Link to = '/subjects' className = 'button button__start'> Бастау </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5;