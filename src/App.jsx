import { useEffect, useRef, useState } from 'react'

import Awards from './components/Awards'

function App() {
  const [count, setCount] = useState(0)
  const refrence = useRef(null)

  useEffect(()=>{
    
  },[])

  return (
    <div className="container App">
      <div className="font-body">
        <Awards/>
      </div>
    </div>
  )
}

export default App
