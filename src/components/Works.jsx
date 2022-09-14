import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { spinOnHover } from "../animations";
import Button from "./Button";
import EyebrowText from "./EyebrowText";

export default function Works({}) {
  const btn = useRef(null)
  const container = useRef(null)

  useEffect(()=>{
    spinOnHover(btn,btn.current.querySelector("svg"))

    const tl = gsap.timeline({defaults:{duration:1,ease:"power1.inOut"},scrollTrigger:{
      trigger:container.current,
      start:"top 70%",
      toggleActions:"play none none reverse",
    }})
    
    tl.fromTo(container.current.querySelectorAll('.reveal'),{height:"100%"},{height:"0%",stagger:0.3})
    .fromTo(container.current.querySelectorAll('img'),{scale:1.2},{scale:1},0)
    .fromTo(container.current.querySelectorAll('p'),{autoAlpha:0},{autoAlpha:1},0)
    .fromTo(container.current.querySelectorAll('h6 , h5'),{autoAlpha:0},{autoAlpha:1},0)

  },[])

  return (
  <section id="Our-Work" ref={container} className="my-28 relative flex flex-wrap lg:flex-nowrap gap-8 container">
    <div className="h-min basis-full">
      <EyebrowText>recent works</EyebrowText>
      <h5 className="text-display-md md:text-display-xl">some of our crafts made with love</h5>
      <div className="my-24">
        <Work img="./images/villa.webp" title="Villa Furnishing & Interior" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi."/>
      </div>
      <Button ref={btn} children={"Contact Us"} type="lg" classes="absolute bottom-0 translate-y-[150%] lg:relative"/>
    </div>

    <div className="space-y-20 lg:px-14 basis-full">
        <Work img="./images/hotel.webp" title="Luxury Hotel Renovation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam."/>
        <Work img="./images/pool.webp" title="Residence Swimming Pool" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam."/>
    </div>
  </section>
  )
}

function Work({img,title,text}) {
  return (
  <div className="space-y-6">
    <div className="relative overflow-hidden">
      <img src={img} alt="work" className="w-full object-cover"/>
      <span className="reveal"></span>
    </div>

    <h6 className="text-display-xs md:text-display-md">{title}</h6>
    <p className="text-neutral-700 text-body-lg font-light">{text}</p>
  </div>
  );
}
    