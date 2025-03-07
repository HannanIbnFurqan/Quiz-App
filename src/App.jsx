import React, { useEffect, useReducer } from 'react'
import quizeData from './data/question.json'
import Question from './components/Question'
const initialState = {
  questions: [],
  status: 'Loading',
  index: 0,
  answer: null,
  secondsRemaining: null
}

const reducer = (state, action)=>{
    switch(action.type){
      case 'dataReceived':
        return{
          ...state,
          questions: action.payload,
          status: 'ready'

        }
    }
}
function App() {
const [{questions, index, status, answer, secondsRemaining}, dispatch] = useReducer(reducer, initialState);


useEffect(()=>{
  dispatch({type: 'dataReceived', payload: quizeData.questions})
},[])
  return (
    <div>
       <Question questions={questions} index={index}></Question>
    </div>
  )
}

export default App
