import React from 'react';
import { Redirect } from 'react-router-dom';
import { Section1, Section2, Section3, Section4, Section5, Section6, Section7 } from '.';


const Content = ({ isAuth, language }) => {

    if ( isAuth ) {
        return <Redirect to = '/subjects'/>
    } 
    return (
        <div>
            <Section1 language = { language }/>
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