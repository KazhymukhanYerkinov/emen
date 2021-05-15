import React from 'react';

import cls from '../EntContent.module.css';



const ManSubjects = ({ mandatory_subjects, BASE_URL }) => {
  return (
    <React.Fragment>
      <div className={cls.ent__title}> Міндетті пәндер </div>
      <div className={cls.ent__desc}> ҰБТ келетін негізгі міндетті пәндер  </div>

      <div className={cls.mandatory__content}>
        {mandatory_subjects.map((item, index) => {
          return (
            <div className={cls.subject} style={{ backgroundColor: item.color }} key={index}>
              <img className = {cls.subject__image} src={BASE_URL + "" + item.logo} alt="" />

              <div className={cls.subject__info}>
                <div className={cls.subject__name}> {item.name_ru} </div>
                <div className={cls.subject__variant}> {item.variant_number} нұсқа <br /> {item.question_number} тапсырма </div>
              </div>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default ManSubjects;