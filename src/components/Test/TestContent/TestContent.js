import React from 'react';
import TestQuestion from './TestQuestion/TestQuestion';

import cls from './TestContent.module.css';
import TestGroup from './TestGroup/TestGroup';


const TestContent = ({ TEST_QUESTIONS, setMapWithAnswers, hasAnswer }) => {


  React.useEffect(() => {

    // Арасындағы Latex жазылғандарды Html-ге айналдырады
    window.MathJax.Hub.Config({ tex2jax: { inlineMath: [['$', '$'], ['\\(', '\\)']] } });
    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, document.querySelector('.challenge__description')]);


  }, []);

  console.log(TEST_QUESTIONS)
  return (
    <div className={cls.content}>
        {
          TEST_QUESTIONS.map((variant, index) => {
            return (
              <React.Fragment key = { index }>
                {variant.questions.map((item, index) => {
                  return item.is_group ?
                  (
                    <TestGroup 
                      key = { index }
                      item = { item }
                      uuid = { variant.uuid }
                      hasAnswer = { hasAnswer }
                      setMapWithAnswers = { setMapWithAnswers }
                    />
                  ) : (
                    <TestQuestion
                      key = { index }
                      {...item}
                      uuid = { variant.uuid }
                      hasAnswer = { hasAnswer }
                      setMapWithAnswers={setMapWithAnswers}
                    />
                      )
                })}
              </React.Fragment>
            )
          })
        }
          
    </div>
  )
}
export default React.memo(TestContent);