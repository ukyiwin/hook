import React from 'react'
import {reset} from './actions'
import { useStore } from './context'

const Display = () => {
  const {state, dispatch} = useStore()

  return (
    <footer>
      <p>Another component knows that counter equals to {state.counter} as well!</p>
      
      <p>
        It even can 
        <button 
          onClick={() => dispatch(reset())}>
          reset the coutner</button>
      </p>
    </footer>
  )
}

export default Display