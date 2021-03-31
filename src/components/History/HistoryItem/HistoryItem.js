import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ArrowComponent } from '../../../assets/detail/arrow.svg';

import cls from './HistoryItem.module.css';

const HistoryItem = (props) => {

  let second = ('0' + Math.floor(props.history.exam_duration % 60)).slice(-2);
  let minute = ('0' + Math.floor((props.history.exam_duration % 3600) / 60)).slice(-2);
  let hours = ('0' + Math.floor(props.history.exam_duration / 3600)).slice(-2);

  return (
    <tr className={cls.column}>

      <td className={cls.first_row}>
        <NavLink to={`/history/${props.history.uuid}`}>
          <img src={props.BASE_URL + '' + props.history.subject.logo} alt='' />
          <span> {props.history.subject.name_ru} </span>
        </NavLink>
      </td>


      <td> <NavLink to={`/history/${props.history.uuid}`}> {props.history.variant} </NavLink> </td>
      <td> <NavLink to={`/history/${props.history.uuid}`}>{props.history.score}/{props.history.total_score}</NavLink> </td>
      <td> <NavLink to={`/history/${props.history.uuid}`}>{hours}:{minute}:{second} </NavLink></td>
      <td> <NavLink to={`/history/${props.history.uuid}`}>24.10.2000 </NavLink></td>
      <td className={cls.last_row}> <NavLink to={`/history/${props.history.uuid}`}><ArrowComponent /></NavLink> </td>

    </tr>

  )
}

export default HistoryItem;