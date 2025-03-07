import React from 'react';

export default function Question({ questions, index }) {
  if (!questions.length) {
    return <div>Loading...</div>;  // Handle empty state
  }
  return (

    <div>{questions[index].question}</div>
  );
}
