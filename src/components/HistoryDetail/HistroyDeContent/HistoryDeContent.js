import React from 'react';

import Question from './Question/Question';
import GroupQuestion from './GroupQuestion/GroupQuestion';
import Navigator from './Navigator/Navigator';

import cls from '../HistoryDetail.module.css';



const HistoryDeContent = (props) => {
  React.useEffect(() => {

    // Арасындағы Latex жазылғандарды Html-ге айналдырады
    window.MathJax.Hub.Config({ tex2jax: { inlineMath: [['$', '$'], ['\\(', '\\)']] } });
    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, document.querySelector('.challenge__description')]);
    
  }, [])
  return (
    <div className = {cls.content}>
      <div className = {cls.question__content}>
        { props.variants.map((questions, baseKey) => {
          return (
            <React.Fragment key = { baseKey }>
                { questions.questions.map((question, index) => {
                  if (question.is_group) {
                    return (
                      <GroupQuestion
                        key = { index }
                        group_question = { question }
                      />
                    )
                  }
                  return (
                    <Question
                      key = { index }
                      question = { question } 
                    />
                  )
                })}
            </React.Fragment>
          )
        }) }
      </div>
      
      <div className = {cls.question__navigator}>
        <Navigator { ...props }/>
      </div>
    </div>
  )
}

export default HistoryDeContent;