import React from 'react';
import classNames from 'classnames';

import { smoothCollapse, closeSmoothCollapse } from '../../../../utils/smoothCollapse';
import arrow from '../../../../assets/detail/arrow.svg';
import cls from './CategoriesByTheme.module.css';
import SubCategories from '../SubCategories/SubCategories';


const CategoriesByTheme = ({ index, item, topicID, showCategories, onChangeShowCategories, onHandleSettingsModal }) => {
  

  const isValid = index === showCategories;



  const handleSmoothCollapse = () => {
    
    if (showCategories !== null && index !== showCategories) {
      closeSmoothCollapse(`subcategories_smooth_${showCategories}`);
    }

    onChangeShowCategories(index);
    smoothCollapse(`subcategories_smooth_${index}`);
  }

  return (
    <div className={cls.bottom__border}>
      <div className={cls.categories} onClick={ handleSmoothCollapse }>
        <div className={cls.categories__flex}>
          <div className={cls.categories__theme}> {index + 1}. {item.name_ru} </div>
          <div className={cls.categories__counts}> <span className={cls.result}> Решено: </span>{item.solved_question_count} / {item.all_question_count} </div>
        </div>
        <img src={arrow} alt="" className={classNames(cls.categories__image, {
          [cls.active]: isValid
        })} />

      </div>
        <SubCategories
          index = { index }
          topicID={topicID}
          items={item.categories}
          onHandleSettingsModal={onHandleSettingsModal}
        />
    </div>
  )
}
export default CategoriesByTheme;

