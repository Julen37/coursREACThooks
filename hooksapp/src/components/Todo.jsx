import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm';

const Todo = () => {

    const [warning, setWarning] = useState(false);

    const [todos, setTodos] = useState ([
        {id: 1, todo: 'Acheter du lait'},
        {id: 2, todo: 'Acheter du pain'},
    ]);

    const myTodos = todos.map( todo => {
        return (
            <li className="list-group-item" key={todo.id}>{todo.todo}</li>
        )
    })

    const addNewTodo = (newTodo) => {
        const newid = uuidv4();

        if(newTodo !== '') {

            warning && setWarning(false) // pour que le message de warning s'enleve quand on renvoie un submit

            setTodos([...todos, {
                id: newid,
                todo: newTodo,
            }])
        } else {
            setWarning(true); // affiche le message warning
        }
    }

    const warningMsg = warning && <div className='alert alert-danger mt-2' role='alert'>Veuillez indiquer un todo</div>
    // message de warning 

  return (
    <div>  
        <h1> {todos.length} To-do</h1>
        <ul className='list-group'>
            {myTodos}
        </ul>
        <AddTodoForm addNewTodo={addNewTodo}/>
        {warningMsg}
    </div>
  )
}

export default Todo;
