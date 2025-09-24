import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state, action) => {
    switch (action) {
        case 'increment' : 
            return state + 1
        case 'decrement' :
            return state - 1
        case 'initial' :
            return initialState
    }
}

function CountReducer() {
    
// const [state, dispatch] = useReducer(reducer, {count: 0});
// const [countState, countDispatch] = useReducer(reducer, 0,)
// state = etat initial / dispatch = fait le changement, l'action qu'on lui donnera
const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch('decrement')} className='btn btn-danger m-3'>-</button>
      <button onClick={() => dispatch('initial')} className='btn btn-light m-3'>0</button>
      <button onClick={() => dispatch('increment')} className='btn btn-success m-3'>+</button>
    </div>
  )
}

export default CountReducer
