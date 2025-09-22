import './App.css'
import ClassCount from './components/ClassCount'
import ClassState from './components/ClassState'
import FunctionCount from './components/FunctionCount'
import FunctionState from './components/FunctionState'
import Todo from './components/Todo'

function App() {

  return (
      <div className='container'>
        <h1>useState Hooks</h1>
        <ClassState/>
        <hr />
        <FunctionState/>
        <hr />
        <Todo/>
        <hr />
        {/* <ClassCount/> */}
        <hr />
        <FunctionCount/>
      </div>
  )
}

export default App

