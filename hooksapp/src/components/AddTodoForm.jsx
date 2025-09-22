import {useState} from 'react'

const AddTodoForm = ({addNewTodo}) => {

    const [addTodo, setAddTodo] = useState('')

    const handleTodo = (e) => {
        e.preventDefault() // gestion des cas d'erreur + la page ne se recharge pas apres l'event
        addNewTodo(addTodo)
        setAddTodo('') // remet la value sur l'ecran a jour pour qu'il soit vide 
    }

  return (
    <form onSubmit={handleTodo}>
        <div className='card card-body mt-2'>
            <div className='form-group'>
                <label className='text-dark mb-2'>Ajouter Todo :</label>
                {/* on recupere la value au changement, envoyant la cible de l'evenement aka la value au usestate */}
                <input className='form-control' value={addTodo} type="text" onChange={(e) => setAddTodo(e.target.value)} />
                <input className='btn btn-success mt-2' type="submit" />
            </div>
        </div>
    </form>
  )
}

export default AddTodoForm;
