import React from 'react';

import { data } from '../../../data/section6';
import Block from './Block';



const Section6 = () => {
    return (
        <div className = 'section6'>
            <div className = 'container'>
                <div>
                    <div>
                        <div className = "content__title"> Часто задаваемые вопросы </div>
                        <div className = "content__description"> Давно выяснено, что при оценке дизайна и композиции <br/> читаемый текст мешает сосредоточиться. </div>
                    </div>
                    <div>
                        { data.map((item, index) => {
                            return (
                                <Block {...item} index = { index } key = { index }/>
                            )
                        }) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section6;