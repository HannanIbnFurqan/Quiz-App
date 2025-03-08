import React, { useEffect, useReducer } from 'react';
import quizeData from './data/question.json';
import Question from './components/Question';

const initialState = {
  questions: [],
  status: 'Loading',
  index: 0,
  answer: null,
  score: 0,
  secondsRemaining: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };

    case 'selectAnswer':
      const isCorrect = action.payload === state.questions[state.index].correctOption;
      return {
        ...state,
        answer: action.payload,
        score: isCorrect ? state.score + 1 : state.score,
      };

    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null, // ✅ Reset answer for the next question
      };

    default:
      return state;
  }
};

function App() {
  const [{ questions, index, status, answer, score }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'dataReceived', payload: quizeData.questions });
  }, []);

  if (status === 'Loading') {
    return <h1>Loading...</h1>;
  }

  if (index >= questions.length) {
    return <h1>Quiz Finished! Your Score: {score}/{questions.length}</h1>;
  }

  return (
    <div>
      {status === 'ready' && (
        <>
          <Question questions={questions} index={index} answer={answer} dispatch={dispatch} />
          {answer !== null && (
            <button onClick={() => dispatch({ type: 'nextQuestion' })}>Next</button>
          )}
        </>
      )}
    </div>
  );
}

export default App;
