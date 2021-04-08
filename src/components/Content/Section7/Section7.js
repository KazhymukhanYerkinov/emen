import React from 'react';
import { Link } from 'react-router-dom';

import { data } from '../../../data/section7';
import Block from './Block';



const Section7 = () => {
    return (
        <div className = 'section7'>
            <div className = "container">
                <div>

                    <div>
                        <div className = "content__title"> Полезный контент <br /> в нашем инстаграме</div>
                        <div className = "content__description"> Давно выяснено, что при оценке дизайна и композиции <br/> читаемый текст мешает сосредоточиться. <Link to = {'/instagram'} className = 'section7__instagram'> @emenkz </Link> </div>
                    </div>

                    <div className = 'section7__content'>
                        { data.map((item, index) => {
                            return (
                                <Block {...item} key = { index }/>
                            )
                        }) }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section7;