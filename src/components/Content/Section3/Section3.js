import React from 'react';

import { data } from '../../../data/section3';
import Block from './Block';



const Section3 = () => {
    return (
        <div className = 'section3'>
            <div className = 'container'>
                <div>
                    <div>
                        <div className = "content__title"> В платформе всегда актуальные <br /> тестовые вопросы по ЕНТ  </div>
                        <div className = "content__description"> Тестовые вопросы составлены специалистами с многолетним опытом в  сфере подготовки к ЕНТ. В платформе представлены актуальные вопросы  на сегодняшний день, которые встречаются в ЕНТ. </div>
                    </div>

                    <div className = 'section3__content'>
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

export default Section3;