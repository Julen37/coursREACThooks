import React, { useState, useEffect } from 'react'

function FunctionCount() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // useEffect(() => {
    //     setTimeout(() => {
    //         document.title = `Vous avez cliqué ${count} fois`
    //     }, 5000)
    // })
    // est utilisé au lieu des deux dans classcount.jsx (componentDidMount et componentDidUpdate aka au montage et a la mise a jour), 
    // ici le useeffect va le monter et le mettre a jour tout seul
    // le set time out sert juste a voir la difference quand on l'update de 5s, 
    // on decale de 5s le useeffect -> le montage se fait et ensuite la mise a jour 5s apres

    useEffect(() => {
        console.log('mise a jour du titre via useEffect');
        document.title = `Vous avez cliqué ${count} fois`
      }, [count]
    ) 
    // le tableau count a la fin permet d'optimiser pour preciser que ca se met a jour que pour le count et pas pour le name/input 
    // si le count est pas modifié ca fait pas la mise a jour
    // si le tableau est vide ca prendra en compte que le montage / la maj au clic ne relancera pas le useEffect / ca fait un ComponentDidMount

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prevCounter => prevCounter + 1)}>clik hooks</button>
      <br />
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
    </div>
  )
}

export default FunctionCount
