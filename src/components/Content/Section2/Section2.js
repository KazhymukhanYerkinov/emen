import React from 'react';

import { data } from '../../../data/section2';
import Block from './Block';




const Section2 = () => {
    return (
        <div className = 'section2'>
            <div className = 'container'>
                <div>
                    <div>
                        <div className = "content__title"> Біздің платформа </div>
                        <div className = "content__description"> Платформа арқылы қол жеткізе алатын мүмкіндіктер </div>
                    </div>

                    <div className = 'section2__content'>
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