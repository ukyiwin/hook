import React from 'react'
import { useStore } from './context'

import {
    changeMyCount,
} from './actions'

const MyForm = () => {
  const {state, dispatch} = useStore()

  return (
    <form className='form'>
        <input 
          onChange={e => dispatch(changeMyCount(e.target.value))} 
          value={state.myCount}
          type='number' />
    </form>
  )
}

export default MyForm