import React from 'react';
import classNames from 'classnames';

import cls from './PaginationHistory.module.css'

const PaginationHistory = (props) => {
  let page_size = Math.ceil( props.total_count / props.pages_count );

  const handlePageChange = (count) => {
    window.scrollTo(0, 0);
    
    let temp = props.current_page + count;
    if (temp >= 1 && page_size >= temp) {
      props.setCurrentPage(temp);
      props.getHistoryListThunk(temp, props.pages_count)
    }
    
  }
  return (
    <div className = {cls.pagination}>
      <button
        className = {classNames(cls.previous__button, {[cls.disabled]: props.current_page === 1})} 
        onClick = {() => handlePageChange(-1)}> 
        Предыдущая страница 
      </button>

      <button
        disabled = {props.current_page === page_size}
        className = {classNames(cls.next__button, {[cls.disabled]: props.current_page === page_size})} 
        onClick = {() => handlePageChange(1)}> 
        Следующая страница 
      </button>
    </div>
  )
}

export default PaginationHistory;