import React from 'react';

import compas from '../../../../assets/logos/compas.svg';
import NavSubject from './NavSubject/NavSubject';
import { closeSmoothCollapse, smoothCollapse } from '../../../../utils/smoothCollapse';


import classNames from 'classnames';



const Navigator = (props) => {
  const [ showNavigatorQuestion, setShowNavigatorQuestion ] = React.useState(0);
  const [ navigatorCompas, setNavigatorCompas ] = React.useState(false);

  const handleNavigatorQuestions = (navigator_id) => {

    if (showNavigatorQuestion !== null && navigator_id !== showNavigatorQuestion) {
      closeSmoothCollapse(`history_navigator_${showNavigatorQuestion}`);
    }
    smoothCollapse(`history_navigator_${navigator_id}`);

    setShowNavigatorQuestion((prevState) => {
      if (navigator_id === prevState) {
        return null;
      }
      return navigator_id;
    })
  }

  const handleSmoothScroll = (question_id) => {
    const targetElement = document.querySelector(`#history_scroll_${question_id}`);
    const rectTop = targetElement.getBoundingClientRect().top;
    const offsetTop = window.pageYOffset;

    let buffer = 90;

    if (window.innerWidth <= 600) {
      buffer = 350;
    }
    
    const top = rectTop + offsetTop - buffer;

    window.scrollTo({
      top,
      behavior: "smooth"
    });

    if (navigatorCompas) setNavigatorCompas(false);



  }

  const handleNavigatorCompas = () => {
    setNavigatorCompas((prevState) => !prevState);
  }

  

  

  return (
    <div className = 'navigator'>

      <div className = 'navigator__header'>
        <div className = 'navigator__title'> Навигация </div>
        <div className = 'navigator__compas' onClick = { handleNavigatorCompas }>
          <img src = { compas } alt = '' />
        </div>
      </div>

      <div className = {classNames('navigator__subject', {'active': navigatorCompas})}>
        { props.variants.map(( variant, index ) => {
          return (
            <NavSubject
              id = { index }
              key = { index }
              variant = { variant }

              handleSmoothScroll = { handleSmoothScroll }

              showNavigatorQuestion = { showNavigatorQuestion }
              handleNavigatorQuestions = { handleNavigatorQuestions }

              BASE_URL = { props.BASE_URL }
            />
          )
        }) }
        
      </div>

    </div>
  )
}

export default Navigator;