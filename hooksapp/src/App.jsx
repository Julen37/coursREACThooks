import React, { useState} from 'react'
import './App.css'
import ClassCount from './components/ClassCount'
import ClassState from './components/ClassState'
import FunctionCount from './components/FunctionCount'
import FunctionState from './components/FunctionState'
import Profile from './components/Profile'
import TestUseEffect from './components/TestUseEffect'
import Todo from './components/Todo'
import { UserContext, ColorContext } from './components/MyContext'

function App() {

  const [user, setUser] = useState(
    {name: "Lisa", age: 8}
  )

  return (
      <div className='container'>
        <h1>useState Hooks</h1>
        <ClassState/>
        <hr />
        <FunctionState/>
        <hr />
        <Todo/>
        <hr />
        <p>Class Count</p>
        {/* <ClassCount/> */}
        <hr />
        <p>Function Count</p>
        <FunctionCount/>
        <hr />
        <TestUseEffect/>
        <hr />
        <p>exo 10 / UseContext</p>
        <UserContext.Provider value={user}>
          <ColorContext.Provider value={'pink'}>
            <Profile/>
          </ColorContext.Provider>
        </UserContext.Provider>
      </div>
  )
}

export default App

