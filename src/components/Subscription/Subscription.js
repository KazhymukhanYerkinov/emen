import React from 'react';
import SubBlock from './SubBlock/SubBlock';

import cls from './Subscription.module.css';
import SubTable from './SubTable/SubTable';

const Subscription = (props) => {


  return (
    <div className={cls.subscription}>
      <div className='container'>
        <div className={cls.subscription__inner}>

          <div className = {cls.title}> Тарифы </div>

          <div className = {cls.subs__blocks}>
            {props.subs.tariffs.map((sub, index) => {
              return (
                <SubBlock
                  key = { index }

                  BASE_URL = { props.BASE_URL }
                  sub = { sub } 
                />
              )
            })}
          </div>

          <div className = {cls.title}> Cравнение тарифов </div>
          <SubTable
            tariffs = { props.subs.tariffs_comparison }
          />
          
        </div>
      </div>
    </div>
  )
}

export default Subscription;