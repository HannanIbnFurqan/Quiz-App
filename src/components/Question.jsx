import React from 'react'
import Option from './Option'
function Question({question, index, answer, disptch}) {
  return (
    <div>
        <h1>{question.question}</h1>
        <Option></Option>
    </div>
  )
}

export default Question
