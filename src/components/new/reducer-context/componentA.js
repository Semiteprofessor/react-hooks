import React, {useContext} from 'react'
import { CountContext } from '../../../App'


const ComponentA = () => {
  const countContext = useContext(CountContext)
  return (
    <div>Component A
			<button onClick={() => countContext.countDispatch("increment")} className="btn">
				Increment
			</button>
			<button onClick={() => countContext.countDispatch("decrement")} className="btn">
				Decrement
			</button>
			<button onClick={() => countContext.countDispatch("reset")} className="btn">
				Reset
			</button>
    </div>
  )
}

export default ComponentA