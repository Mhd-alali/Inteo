import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Nav from './components/Nav'
import Hero from './components/Hero';
import Awards from './components/Awards'
import About from './components/About'

gsap.registerPlugin(ScrollTrigger)

function App() {  
  useEffect(()=>{
    
  },[])

  return (
    <div className="App">
      <Nav/>
      <Hero />
      <div className="bg-neutral-900">
        <div className="container ">
          <Awards/>
        </div> 
      </div>
       <About />
    </div>
  )
}

export default App