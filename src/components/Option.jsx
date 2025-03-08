import React from 'react';
import "./option.css"
export default function Option({ questions, answer, index, dispatch }) {
  console.log("Questions:", questions);

  if (!questions.length) {
    return <div>Loading...</div>;
  }

 
  const hasAnswer = answer !== null;
  console.log("hasAnswe = ", hasAnswer);


  return (
    <div>
      <div>
        {questions[index]?.options?.map((item, idx) => (
          <button
            key={idx}
            onClick={() => dispatch({ type: "selectAnswer", payload: idx })}
            className={`${hasAnswer ? index === questions[index].correctOption ? "correct": "wrong" : ""}`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
