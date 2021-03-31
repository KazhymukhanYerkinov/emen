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
          {props.text_list.map((item, index) => (
            <SubColumn
              is_text
              key = { index }
              item = { item } 
            />
          ))}

          {props.type_list.map((item, index) => (
            <SubColumn
              key = { index }
              item = { item }
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SubTable;