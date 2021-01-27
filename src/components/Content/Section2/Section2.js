import React from 'react';
import classNames from 'classnames';

import { data } from '../../../data/section2';
import Block from './Block/Block';

import cls from './Section2.module.css';



const Section2 = () => {
    return (
        <div className = {cls.section}>
            <div className = 'container'>
                <div className = {cls.section__inner}>
                    <div className = {cls.section__header}>
                        <div className = "section__title text__center"> Наша платформа </div>
                        <div className = "section__text text__center"> Давно выяснено, что при оценке дизайна и композиции <br/> читаемый текст мешает сосредоточиться. </div>
                    </div>

                    <div className = {cls.section__content}>
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

export default Section2;