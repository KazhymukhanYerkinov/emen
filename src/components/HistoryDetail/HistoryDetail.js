import React from 'react';

import HistoryDeHeader from './HistoryDeHeader/HistoryDeHeader';
import HistoryDeContent from './HistroyDeContent/HistoryDeContent';

import cls from './HistoryDetail.module.css';



const HistoryDetail = (props) => {
  return (
    <div className={cls.history}>
      <div className='container'>
        <HistoryDeHeader {...props} />
        <HistoryDeContent variants = { props.history.variants } BASE_URL = { props.BASE_URL }/>
      </div>
    </div>
  )
}

export default HistoryDetail;