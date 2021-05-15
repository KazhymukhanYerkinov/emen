import React from 'react';

import { data } from '../../../data/section4';
import Block from './Block';



const Section4 = () => {
    return (
        <div className = 'section4'>
            <div className = 'container'>
                <div>

                    <div>
                        <div className = "content__title"> Платформа қалай жұмыс жасайды ?  </div>
                        <div className = "content__description"> Астынды көрсетілген қадамдар бойынша платформаның толық  <br /> қалай жұмыс жасайтынымен таныса аласыздар  </div>
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