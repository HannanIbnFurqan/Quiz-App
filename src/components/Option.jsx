import React from 'react';

export default function Option({ question, answer}) {
    if (!question || !Array.isArray(question.options)) {
        return <p>No options available</p>;
    }
   
    const hasAnswer = answer != null;
    console.log('hasAnswer =', hasAnswer)
    return (
        <div style={{display: 'flex'}}>
            {question.options.map((option, index) => (
                <div key={index}>
                    <button>{option}</button>
                </div>
            ))}
        </div>
    );
}
