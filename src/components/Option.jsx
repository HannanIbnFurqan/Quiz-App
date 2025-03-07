import React, { useReducer } from 'react'

export default function Option() {
    const [state, dispatch] = useReducer(reducer, {count: 0})
  return (
    <div>
       <h1>{state.count}</h1>
    </div>
  )
}
