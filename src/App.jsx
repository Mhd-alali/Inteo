import React, { Suspense, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Nav = React.lazy(() => import('./components/Nav'))
const Hero = React.lazy(() => import('./components/Hero'))
const Awards = React.lazy(() => import('./components/Awards'))
const About = React.lazy(() => import('./components/About'))
import Loading from './components/Loading'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <>
      <Loading isLoading={loading} />
      <Suspense fallback={null}>
        <div className="App relative">
          <Nav />
          <Hero />
          <div className="bg-neutral-900">
            <div className="container ">
              <Awards />
            </div>
          </div>
          <About />
        </div>
      </Suspense>
    </>
  )
}

export default App