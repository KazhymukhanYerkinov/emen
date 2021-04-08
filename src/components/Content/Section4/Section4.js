import React from 'react';

import { data } from '../../../data/section4';
import Block from './Block';



const Section4 = () => {
    return (
        <div className = 'section4'>
            <div className = 'container'>
                <div>

                    <div>
                        <div className = "content__title"> Как это работает?  </div>
                        <div className = "content__description"> Давно выяснено, что при оценке дизайна и композиции <br /> читаемый текст мешает сосредоточиться. </div>
                    </div>

                    <div className = 'section4__content'>
                        {data.map((item, index) => {
                            return (
                                <Block {...item} key = { index }/>
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section4;