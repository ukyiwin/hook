import React from 'react'
import { useStore } from './context'
import Button from './Button'

import {
  change,
  magic,
  minus,
  plus,
} from './actions'

const Form = () => {
  const {state, dispatch} = useStore()
  console.log('state',state,dispatch)
  return (
    <form className='form'>
      <label>
        <span className='form-header'>You shall see your future! I hope...</span>
        <input 
          onChange={e => dispatch(change(e))} 
          value={state.counter}
          type='number' />
      </label>

      <div className='form-controls'>
        <Button
          onClick={() => dispatch(minus())}
          text='Subtract 1'
          type='minus' />
        
        <Button
          onClick={() => dispatch(magic())}
          text='Random number'
          type='magic' />

        <Button
          onClick={() => dispatch(plus())}
          text='Add 1'
          type='plus' />
      </div>
    </form>
  )
}

export default Form