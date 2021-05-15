import React from 'react';

import { data } from '../../../data/section3';
import Block from './Block';



const Section3 = () => {
    return (
        <div className = 'section3'>
            <div className = 'container'>
                <div>
                    <div>
                        <div className = "content__title"> Платформа ҰБТ-дағы тест сұрақтарымен <br /> әрдайым жаңарып отырады  </div>
                        <div className = "content__description"> Тест сұрақтарын ҰБТ-ға дайындық саласында көп жылдық тәжірибесі бар мамандар құрастырды. Платформада ҰБТ-да кездесетін өзекті сұрақтар ұсынылған. </div>
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