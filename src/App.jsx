import { useEffect, useReducer } from 'react'
import Quiz_Data from './data/question.json'
import './App.css'

function App() {
  const reducer = (status, action) => {
    switch (action.type) {
      case "dataRecived":
        return {...status, questions: action.payload, status: 'Ready'}
    }
  }
  const initialState = {
    questions: [Quiz_Data.questions],
    status: 'loading',
    index: 0,
    answer: null,
    secondsRemaining: null
  }
  const [{ questions, status, index, answer, secondsRemaining }, disptch] = useReducer(reducer, initialState);
  useEffect(() => {
    disptch({ type: 'dataRecived', payload: Quiz_Data.questions })
  },[])
  return (
    <div>
      <ul>
        {questions.map((question,index)=> {
          return(
            <li key={index}>{question.question}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
