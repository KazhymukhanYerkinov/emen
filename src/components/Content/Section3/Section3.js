import React from 'react';

import { data } from '../../../data/section3';
import Block from './Block/Block';

import cls from './Section3.module.css';


const Section3 = () => {
    return (
        <div className = {cls.section}>
            <div className = 'container'>
                <div className = {cls.section__inner}>
                    <div className = {cls.section__header}>
                        <div className = "section__title"> В платформе всегда актуальные <br /> тестовые вопросы по ЕНТ  </div>
                        <div className = "section__text"> Тестовые вопросы составлены специалистами с многолетним опытом в  сфере подготовки к ЕНТ. В платформе представлены актуальные вопросы  на сегодняшний день, которые встречаются в ЕНТ. </div>
                    </div>

                    <div className = {cls.section__content}>
                        {data.map((item, index) => {
                            return (
                                <Block {...item}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3;