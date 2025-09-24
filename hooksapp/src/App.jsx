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
import CountReducer from './components/CountReducer'
import Button from './components/Button'
import CountBar from './components/CountBar'

function App() {

  const [user, setUser] = useState(
    {name: "Lisa", age: 8}
  )

  const [countOne, setCountOne] = useState({value: 0, btnColor: 'success', increment: 25 })
  const [countTwo, setCountTwo] = useState({value: 0, btnColor: 'danger', increment: 20 })

  const  incrementCountOne = (val) => {
    countOne.value < 100 && setCountOne({...countOne, value: countOne.value + val})
  } 
  // declaration de la fonction fléchée qui prend pour parametre val qui sera la valeur ajouté
  // si la valeur de countone est strictement inferieur a 100 on execute la suite
  // on prend les données du state de countone et on modifie son ancienne valeur en ajoutant la nouvelle (aka l'increment 25 ici qu'on rappel dans le bouton)

  const  incrementCountTwo = (val) => {
    countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + val})
  } 

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
        <hr />
        <p>exo 11 / UseReducer</p>
        <CountReducer/>
        <hr />
        <p>UseCallBack</p>
        <CountBar count={countOne.value} bgColor={countOne.btnColor}/>
        <CountBar count={countTwo.value} bgColor={countTwo.btnColor}/>
        <Button handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}> Count 1</Button>
        <Button handleClick={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}> Count 2</Button>
      </div>
  )
}

export default App

