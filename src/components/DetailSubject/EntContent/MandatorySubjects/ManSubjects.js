import React from 'react';

import cls from '../EntContent.module.css';



const ManSubjects = ({ mandatory_subjects, BASE_URL }) => {
  
  return (
    <React.Fragment>
      <div className={cls.ent__title}> Обязательные предметы </div>
      <div className={cls.ent__desc}> Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.  </div>

      <div className={cls.mandatory__content}>
        {mandatory_subjects.map((item, index) => {
          return (
            <div className={cls.subject} style={{ backgroundColor: item.color }} key={index}>
              <img className = {cls.subject__image} src={BASE_URL + "" + item.logo} alt="" />

              <div className={cls.subject__info}>
                <div className={cls.subject__name}> {item.name_ru} </div>
                <div className={cls.subject__variant}> 200 вариантов <br /> 5987 задач </div>
              </div>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default ManSubjects;