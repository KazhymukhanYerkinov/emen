import React from 'react';
import { Section1, Section2, Section3, Section4, Section5, Section6, Section7 } from '.';
import cls from './Content.module.css';


const Content = () => {
    return (
        <div className = {cls.content}>
            <Section1 />
            <Section2 />
            <Section3 />  
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
        </div>
    )
}

export default Content;