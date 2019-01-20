import React from 'react'
import StoreProvider from './context'
import {initialState} from './store'

import Display from './Display'
import Form from './Form'
import MyForm from './MyForm'

const App = () => {
    return (
        <StoreProvider initialState={initialState}>
          <h1>Magic counter!</h1>
          <Form />
          <Display />
          <MyForm />
        </StoreProvider>
    )
}

export default App