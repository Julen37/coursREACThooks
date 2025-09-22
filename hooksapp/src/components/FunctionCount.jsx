import React, { useState, useEffect } from 'react'

function FunctionCount() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            document.title = `Vous avez cliqué ${count} fois`
        }, 5000)
    })
    // est utilisé au lieu des deux dans classcount.jsx (componentDidMount et componentDidUpdate aka au montage et a la mise a jour), 
    // ici le useeffect va le monter et le mettre a jour tout seul
    // le set time out sert juste a voir la difference quand on l'update de 5s, 
    // on decale de 5s le useeffect -> le montage se fait et ensuite la mise a jour 5s apres

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prevCounter => prevCounter + 1)}>clik hooks</button>
    </div>
  )
}

export default FunctionCount
