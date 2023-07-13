import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './src/Redux/slicer/counteSlicer'

const App = () => {
  const count=useSelector(state=>state.counter.count)
  const dispatch=useDispatch()

    
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>Add</button>
        <h1>{count.count}</h1>
        <button onClick={()=>dispatch(decrement())}>Less</button>
    </div>
  )
}

export default App