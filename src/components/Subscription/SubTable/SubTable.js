import React from 'react';
import SubColumn from './SubColumn';

import cls from './SubTable.module.css';


const SubTable = (props) => {
  return (
    <div className = {cls.content}>
      <table className = {cls.table}>
        <thead className = {cls.thead}>
          <tr>
            <th> &nbsp; </th>
            <th> Базовый </th>
            <th> Премиум </th>
            <th> Cтандарт </th>
          </tr>
        </thead>

        <tbody>
           { props.tariffs.map((tariff, index) => {
             return (
              <SubColumn 
                key = { index }
                tariff = { tariff }
              />
             )
           }) }    
        </tbody>
      </table>
    </div>
  )
}

export default SubTable;