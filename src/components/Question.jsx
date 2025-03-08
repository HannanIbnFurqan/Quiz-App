import React from 'react';
import Option from './Option';
export default function Question({ questions, index, answer, dispatch }) {
  if (!questions.length) {
    return <div>Loading...</div>;  // Handle empty state
  }
  return (

   <div>
     <h1>{questions[index].question}</h1>
     <Option questions={questions} index={index} answer={answer} dispatch={dispatch}></Option>
   </div>

  );
}
