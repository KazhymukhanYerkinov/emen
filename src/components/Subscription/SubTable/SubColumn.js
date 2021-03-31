import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import cls from './SubTable.module.css';

const SubColumn = (props) => {
    return (
        <React.Fragment>
        {props.is_text 
            ? <tr className={cls.column}>
                <td> {props.item.first} </td>
                <td className = {cls.result}> {props.item.standart} </td>
                <td className = {cls.result}> {props.item.premium} </td>
                <td className = {cls.result}> {props.item.gold} </td>
            </tr>
            : <tr className={cls.column}>
                <td> {props.item.first} </td>
                <td className = {cls.result}> {props.item.standart ? <CheckCircleIcon style = {{ color: '#1ABF7E' }}/>:<CancelIcon style = {{ color: '#D92A45' }}/>} </td> 
                <td className = {cls.result}> {props.item.premium ? <CheckCircleIcon style = {{ color: '#1ABF7E' }}/>:<CancelIcon style = {{ color: '#D92A45' }}/>} </td> 
                <td className = {cls.result}> {props.item.gold ? <CheckCircleIcon style = {{ color: '#1ABF7E' }}/>:<CancelIcon style = {{ color: '#D92A45' }}/>} </td> 
            </tr>}
        </React.Fragment>
    )
}

export default SubColumn;