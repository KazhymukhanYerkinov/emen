import React from 'react';
import { Link } from 'react-router-dom';

const Subject = ({ BASE_URL, language, item }) => {



  return (
    <Link to={item.id === "full_unt" ? `/showTheme/${item.id}/ENT` : `/showTheme/${item.id}/SUBJECT`} className='subject subject__large' style={{ backgroundColor: `${item.color}` }}>

      <div className = 'subject__large-content'>
        <img src={BASE_URL + '' + item.logo} alt="" className = 'image image__50px'/>
        <div className = 'subject__large-info'>
          <div className='subject__large-title'> {item[`name_${language}`]} </div>
          {item[`description_${language}`] ? <div className='subject__large-variant'> {item[`description_${language}`]} </div> :
            <>
              <div className = 'subject__large-variant'> {item.variant_count} вариантов </div>
              <div className = 'subject__large-variant'> {item.question_count} задач </div>
            </>
          }
        </div>
      </div>

      <div className='button button__over button__over--none'> Перейти </div>

    </Link>
  )
}

export default Subject;