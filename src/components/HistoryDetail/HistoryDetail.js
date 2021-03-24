import React from 'react';

import HistoryDeHeader from './HistoryDeHeader/HistoryDeHeader';
import HistoryDeContent from './HistroyDeContent/HistoryDeContent';

import cls from './HistoryDetail.module.css';



const HistoryDetail = () => {
  return (
    <div className={cls.history}>
      <div className='container'>
        <HistoryDeHeader />
        <HistoryDeContent />
      </div>
    </div>
  )
}

export default HistoryDetail;