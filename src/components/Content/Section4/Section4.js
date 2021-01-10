import React from 'react';

import { data } from '../../../data/section4';
import Block from './Block/Block';


import cls from './Section4.module.css';


const Section4 = () => {
    return (
        <div className = {cls.section}>
            <div className = 'container'>
                <div className = {cls.section__inner}>

                    <div className = {cls.section__header}>
                        <div className = "section__title text__center"> Как это работает?  </div>
                        <div className = "section__text text__center"> Давно выяснено, что при оценке дизайна и композиции <br /> читаемый текст мешает сосредоточиться. </div>
                    </div>

                    <div className = {cls.section__content}>
                        {data.map((item, index) => {
                            return (
                                <Block {...item} />
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section4;