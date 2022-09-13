import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import EyebrowText from './EyebrowText';
import Badge from './Badge';

export default function About({}) {
  const container = useRef(null)
  const badge = useRef(null)

  useEffect(()=>{
    const tl = gsap.timeline({defaults:{duration:1,ease:"power1.inOut"},scrollTrigger:{
      trigger:container.current,
      start:"top 40%",
      toggleActions:"play reverse play reverse",
    }})
    
    tl.to(container.current.querySelectorAll('.reveal'),{height:"0%",stagger:0.3})
    .fromTo(container.current.querySelectorAll('img'),{scale:1.1},{scale:1},0)
    .fromTo(container.current.querySelectorAll('p'),{autoAlpha:0},{autoAlpha:1},0)
    .fromTo(container.current.querySelector('h1'),{autoAlpha:0,y:10},{autoAlpha:1,y:0},0)
  },[])

  return (
  <section ref={container} className='container grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 min-h-screen py-28 gap-10'>
    <div className="space-y-8 pt-12">
      <EyebrowText>About us</EyebrowText>
      <h1 className="text-display-xl font-normal p-0">We help to bring your dream home to reality</h1>
      <p className='text-body-lg font-[350]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.</p>
      <p className='text-body-lg font-[350]'>Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.</p>
    </div>
    <div className="grid grid-cols-2 gap-8 lg:gap-[2vw] space-y-20 relative">
      <div className="relative overflow-hidden">
        <span className="reveal"></span>
        <img className='w-[25vw] md:min-w-full justify-self-end' src="./images/about image 2.png" alt="kitchen" />
      </div>
      <div className="relative overflow-hidden">
      <span className="reveal"></span>
        <img className='w-[25vw] md:min-w-full justify-self-start' src="./images/about image.png" alt="living room" />
      </div>
      <div className="absolute left-1/2  -translate-y-full -translate-x-1/2 z-10">
        <Badge />
      </div>
    </div>
  </section>
  )
}
  