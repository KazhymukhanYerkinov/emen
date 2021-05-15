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
                        <div className = "content__title"> Біздің интаграмдағы пайдалы <br /> контенттер</div>
                        <div className = "content__description"> Біздің инстаграмға кіріп біздің соңғы жағалықтармен және <br/> пайдалы кеңестерден хабардар бол. <Link to = {'/instagram'} className = 'section7__instagram'> @emenkz </Link> </div>
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