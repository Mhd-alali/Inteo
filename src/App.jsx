import { useEffect, useRef, useState } from 'react'

import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  const refrence = useRef(null)

  useEffect(()=>{
    
  },[])
  
  return (
    <div className="App">
      <div className="font-body">
        <Button type={"lg"} ref={refrence}>
          Contact us
        </Button>
      </div>
    </div>
  )
}

export default App
