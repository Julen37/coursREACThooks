import './App.css'
import ClassState from './components/ClassState'
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
      </div>
  )
}

export default App

