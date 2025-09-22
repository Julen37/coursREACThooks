import { useState } from 'react'

const FunctionState = () => {

    const [ counter, setCounter ] = useState(0)

    // const addOne = () => {
    //     setCounter(counter + 1)
    // }

    // en prenant en compte le prev
    // const addOne = () => {
    //     setCounter(prevCounter => prevCounter + 1)
    // }

  return (
    <div>
        <p>Function State : {counter}</p>
        {/* <button onClick={addOne}>clik avec hooks state dans function</button> */}
        <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>clik avec hooks state dans function</button>

    </div>
  )
}

export default FunctionState
