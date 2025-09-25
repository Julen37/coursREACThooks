import { useCallback, useState} from 'react'

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

import Home from './pages/Home'
import About from './pages/About'
import ProfileRouter from './pages/ProfileRouter'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom' //import du react router
import PrivateRoute from './components/PrivateRoute' // pour les routes privée

function App() {

  const [user, setUser] = useState(
    {name: "Lisa", age: 8}
  )

  // const [countOne, setCountOne] = useState({value: 0, btnColor: 'success', increment: 25 })
  // const [countTwo, setCountTwo] = useState({value: 0, btnColor: 'danger', increment: 20 })

  // const  incrementCountOne = useCallback((val) => {
  //   console.log('je suis dans incrementcountone')
  //   countOne.value < 100 && setCountOne({...countOne, value: countOne.value + val})
  // }, [countOne])
  // declaration de la fonction fléchée qui prend pour parametre val qui sera la valeur ajouté
  // si la valeur de countone est strictement inferieur a 100 on execute la suite
  // on prend les données du state de countone et on modifie son ancienne valeur en ajoutant la nouvelle (aka l'increment 25 ici qu'on rappel dans le bouton)
  // le usecallback sert ici a ce que ca refresh seulement le countone et pas le counttwo avec quand countone est changé

  // const  incrementCountTwo = useCallback((val) => {
  //   countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + val})
  // }, [countTwo])

//router
  const [isAdmin, setIsAdmin] = useState(true); // ou false pour non-admin, 
  // si on met false on pourra plus aller sur profileRouter car ca dirigera sur home

  return (
    <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/profile">Profile</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/profile" 
            element={
              <PrivateRoute isAdmin={isAdmin}>
                <ProfileRouter user={user} />
              </PrivateRoute>
            }
          />
        </Routes>
    </BrowserRouter>

      // <div className='container'>
      //   <h1>useState Hooks</h1>
      //   <ClassState/>
      //   <hr />
      //   <FunctionState/>
      //   <hr />
      //   <Todo/>
      //   <hr />
      //   <p>Class Count</p>
      //  <ClassCount/>
      //   <hr />
      //   <p>Function Count</p>
      //   <FunctionCount/>
      //   <hr />
      //   <TestUseEffect/>
      //   <hr />
      //   <p>exo 10 / UseContext</p>
      //   <UserContext.Provider value={user}>
      //     <ColorContext.Provider value={'pink'}>
      //       <Profile/>
      //     </ColorContext.Provider>
      //   </UserContext.Provider>
      //   <hr />
      //   <p>exo 11 / UseReducer</p>
      //   <CountReducer/>
      //   <hr />
      //   <p>UseCallBack</p>
      //   <CountBar text="CountOne" count={countOne.value} bgColor={countOne.btnColor}/>
      //   <CountBar text="CountTwo" count={countTwo.value} bgColor={countTwo.btnColor}/>
      //   <Button handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}> Count 1</Button>
      //   <Button handleClick={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}> Count 2</Button>
      // </div>
  )
}

export default App

