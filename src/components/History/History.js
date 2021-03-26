import React from 'react';
import cls from './History.module.css';
import HistoryItem from './HistoryItem/HistoryItem';
import PaginationHistory from './PaginationHistory/PaginationHistory';

const History = (props) => {
  
  return (
    <div className={cls.history}>
      <div className='container'>

        <div className={cls.history__header}>
          <div className = {cls.title}> История </div>
          <div className = {cls.description}> Давно выяснено, что при оценке дизайна и композиции <br className = {cls.br}/>  читаемый текст мешает сосредоточиться. </div>
        </div>

        <div className = {cls.block}>
          <div className={cls.history__content}>

            <table className = {cls.table}>

              <thead className = {cls.thead}>
                <tr>
                  <th> Тип </th>
                  <th> Вариант </th>
                  <th> Результат </th>
                  <th> Время </th>
                  <th> Дата </th>
                  <th>  &nbsp;</th>
                </tr>
              </thead>
              
              <tbody>
                { props.history_list.map((history, index) => {
                  return (
                    <HistoryItem
                      key = { index }
                      BASE_URL = { props.BASE_URL }
                      history = { history }
                    />
                  )
                }) }
              </tbody>
            </table>

          </div>
          <PaginationHistory
            current_page = { props.current_page }
            pages_count = { props.pages_count }
            total_count = { props.total_count }

            setCurrentPage = { props.setCurrentPage }
            getHistoryListThunk = { props.getHistoryListThunk }
          />
        </div>

      </div>
    </div>
  )
}

export default History;