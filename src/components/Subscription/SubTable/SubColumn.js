import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import cls from './SubTable.module.css';

const SubColumn = (props) => {
  return (
    <React.Fragment>
      {props.tariff.is_text 
      ? <tr className={cls.column}>
          <td> {props.tariff.name_ru} </td>
          <td> {props.tariff._BASE_SUBSCRIPTION_TYPE_ru} </td>
          <td> {props.tariff._STANDART_SUBSCRIPTION_TYPE_ru} </td>
          <td> {props.tariff._PREMIUM_SUBSCRIPTION_TYPE_ru} </td>
        </tr>
      : <tr className={cls.column}>
          <td> {props.tariff.name_ru} </td>
          <td className={cls.result}> 
            {props.tariff._BASE_SUBSCRIPTION_TYPE_ 
            ? <CheckCircleIcon style={{ color: '#1ABF7E' }} /> 
            : <CancelIcon style={{ color: '#D92A45' }} />} 
          </td>

          <td className={cls.result}> 
            {props.tariff._STANDART_SUBSCRIPTION_TYPE_ 
            ? <CheckCircleIcon style={{ color: '#1ABF7E' }} /> 
            : <CancelIcon style={{ color: '#D92A45' }} />} 
          </td>

          <td className={cls.result}> 
            {props.tariff._PREMIUM_SUBSCRIPTION_TYPE_ 
            ? <CheckCircleIcon style={{ color: '#1ABF7E' }} /> 
            : <CancelIcon style={{ color: '#D92A45' }} />} 
          </td>
        </tr>}
      
    </React.Fragment>
  )
}

export default SubColumn;