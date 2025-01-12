import { useEffect, useReducer } from 'react'
import Quiz_Data from './data/question.json'
import './App.css'
import Question from './components/Question'

function App() {
  const reducer = (status, action) => {
    switch (action.type) {
      case "dataRecived":
        return {...status, questions: action.payload, status: 'Ready'}
    }
  }
  const initialState = {
    questions: [],
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
      {
        status == "Ready" && questions.length > 0 ? 
        <Question question={questions[index]} key={index} answer={answer} disptch={disptch}></Question> : 
        'Loading....'
      }
      
    </div>
  )
}

export default App
