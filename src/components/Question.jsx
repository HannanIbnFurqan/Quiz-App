import React from 'react'
import Option from './Option'
function Question({question, index, answer, disptch}) {
  return (
    <div style={{display: "flex", flexDirection:'column', }}>
        <h1>{question.question}</h1>
        <Option question={question}></Option>
    </div>
  )
}

export default Question
