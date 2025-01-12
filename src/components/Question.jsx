import React from 'react'

function Question({question, index, answer, disptch}) {
  return (
    <div>
      <li>
        {question.question}
      </li>
    </div>
  )
}

export default Question
