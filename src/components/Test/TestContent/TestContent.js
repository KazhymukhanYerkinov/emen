import React from 'react';
import TestQuestion from './TestQuestion/TestQuestion';

import cls from './TestContent.module.css';
import TestGroup from './TestGroup/TestGroup';


const TestContent = ({ TEST_QUESTIONS, mapWithAnswers, setMapWithAnswers, indexOfSub }) => {

  
  



  React.useEffect(() => {

    // Арасындағы Latex жазылғандарды Html-ге айналдырады
    window.MathJax.Hub.Config({ tex2jax: { inlineMath: [['$', '$'], ['\\(', '\\)']] } });
    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, document.querySelector('.challenge__description')]);


  }, [indexOfSub]);


  return (
    <div className={cls.content}>
            {TEST_QUESTIONS[indexOfSub].questions.map((item, index) => {
              return item.is_group ?
              (
                <TestGroup 
                  key = { index }
                  item = { item }
                  indexOfSub = { indexOfSub }
                  uuid = { TEST_QUESTIONS[indexOfSub].uuid }
                  mapWithAnswers = { mapWithAnswers } 
                  setMapWithAnswers = { setMapWithAnswers }
                />
              ) : (
                <TestQuestion
                  key = { index }
                  {...item}
                  indexOfSub = { indexOfSub }
                  uuid = { TEST_QUESTIONS[indexOfSub].uuid }
                  mapWithAnswers={mapWithAnswers}
                  setMapWithAnswers={setMapWithAnswers}
                />
                  )
            })}
    </div>
  )
}
export default TestContent;