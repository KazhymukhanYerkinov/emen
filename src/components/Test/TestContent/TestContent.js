import React from 'react';
import TestQuestion from './TestQuestion/TestQuestion';

import cls from './TestContent.module.css';
import TestGroup from './TestGroup/TestGroup';







const TestContent = ({ TEST_QUESTIONS, mapWithAnswers, setMapWithAnswers }) => {
  React.useEffect(() => {
    // Арасындағы Latex жазылғандарды Html-ге айналдырады
    window.MathJax.Hub.Config({ tex2jax: { inlineMath: [['$', '$'], ['\\(', '\\)']] } });
    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, document.querySelector('.challenge__description')]);

  }, [])

  return (
    <div className={cls.content}>
      { TEST_QUESTIONS.map((questions, keyIndex) => {
        return (
          <div key = { keyIndex } className = {cls.block}>
            <div className = {cls.subject__name} style = {{ backgroundColor: questions.subject.color }}> {questions.subject.name_ru} </div>
            {questions.questions.map((item, index) => {
              return item.is_group ?
              (
                <TestGroup 
                  key = { index }
                  item = { item }
                  uuid = { questions.uuid }
                  mapWithAnswers = { mapWithAnswers } 
                  setMapWithAnswers = { setMapWithAnswers }
                />
              ) : (
                <TestQuestion
                  key = { index }
                  {...item}
                  uuid = { questions.uuid }
                  mapWithAnswers={mapWithAnswers}
                  setMapWithAnswers={setMapWithAnswers}
                />
                  )
            })}
          </div>
        )
      })}
    </div>
  )
}
export default TestContent;