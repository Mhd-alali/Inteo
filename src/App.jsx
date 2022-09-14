import React, { Suspense, useEffect, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Nav = React.lazy(() => import('./components/Nav'))
const Hero = React.lazy(() => import('./components/Hero'))
const Awards = React.lazy(() => import('./components/Awards'))
const About = React.lazy(() => import('./components/About'))
const Metrics = React.lazy(() => import('./components/Metrics'))
const Services = React.lazy(() => import('./components/Services'))
const Works = React.lazy(() => import('./components/Works'))
const Fotter = React.lazy(() => import('./components/Fotter'))
import Loading from './components/Loading'

function App() {
  const [loading, setLoading] = useState(true)
  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
  },[])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <>
      <Loading isLoading={loading} />
      <Suspense fallback={null}>
        <div className="App relative text-neutral-900 mb-10">
          <Nav />
          <Hero />
          <Awards />
          <About />
          <Metrics />
          <hr className="container border-neutral-300"/>
          <Services />
          <hr className="container border-neutral-300"/>
          <Works />
          <hr className="container border-neutral-300"/>
           <Fotter />
        </div>
      </Suspense>
    </>
  )
}

export default App