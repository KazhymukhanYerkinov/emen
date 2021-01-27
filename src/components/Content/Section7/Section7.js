import React from 'react';
import { Link } from 'react-router-dom';

import { data } from '../../../data/section7';
import Block from './Block/Block';

import cls from './Section7.module.css';


const Section7 = () => {
    return (
        <div className = {cls.section}>
            <div className = "container">
                <div className = {cls.section__inner}>

                    <div className = {cls.section__header}>
                        <div className = "section__title text__center"> Полезный контент <br /> в нашем инстаграме</div>
                        <div className = "section__text text__center"> Давно выяснено, что при оценке дизайна и композиции <br/> читаемый текст мешает сосредоточиться. <Link to = {'/instagram'} className = {cls.section__insta}> @emenkz </Link> </div>
                    </div>

                    <div className = {cls.section__content}>
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