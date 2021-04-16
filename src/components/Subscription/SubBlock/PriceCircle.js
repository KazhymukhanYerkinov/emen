import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import cls from './SubBlock.module.css';


const PriceCircle = (props) => {
    return (
        <div className = {cls.circle__block} onClick = {() => props.handleChooseMonth(props.per_months_price)}>
            {props.chooseMonth === props.per_months_price &&
            <React.Fragment>
                <div className = {cls.icon__block}></div>
                <CheckCircleIcon className = {cls.check__icon}/>
            </React.Fragment>}
            
            <div className = {cls.circle__number}> { props.number } </div>
        </div>
    )
}

export default PriceCircle;