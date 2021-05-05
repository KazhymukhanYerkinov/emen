import React from 'react';
import Modal from '../common/Modal/Modal';
import SubBlock from './SubBlock/SubBlock';

import cls from './Subscription.module.css';
import SubTable from './SubTable/SubTable';

let body;

const Subscription = (props) => {

  const handleBody = (uid, chooseMonth) => {
    body = { uid, chooseMonth };
  }

  const handleNewSubs = () => {
    props.postSubs(body.uid, true, body.chooseMonth)
    props.failError();
  }
  

  return (
    <div className={cls.subscription}>
      <div className='container'>
        <div className={cls.subscription__inner}>
          { props.error_code !== 0 &&
            <Modal
              error_code = { props.error_code }
              handleNewSubs = { handleNewSubs }
              handleCloseModal = { props.failError }/> 
          }
          


          <div className = {cls.title}> Тарифы </div>

          <div className = {cls.subs__blocks}>
            {props.subs.tariffs.map((sub, index) => {
              return (
                <SubBlock
                  key = { index }

                  BASE_URL = { props.BASE_URL }
                  sub = { sub } 
                  postSubs = { props.postSubs }
                  handleBody = { handleBody }
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