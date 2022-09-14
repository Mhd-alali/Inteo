import React, { forwardRef, useEffect, useRef } from "react";
import EyebrowText from "./EyebrowText";

import {ReactComponent as Architecture} from '../assets/icons/architecture.svg'
import {ReactComponent as Building} from '../assets/icons/building.svg'
import {ReactComponent as Cursor} from '../assets/icons/cursor.svg'

export default function Services({}) {
  useEffect(()=>{
    
  },[])

  return (
    <section id="Services" className="container my-28">
      <EyebrowText>our services</EyebrowText>
      <h3 className="max-w-4xl text-display-md md:text-display-xl">we provide the <span className="italic font-light">the best solutions</span> for your dream home</h3>
      <div className="mt-10 md:mt-20 grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-8">
        <Card title="Architectural & Interior design" icon={<Architecture/>} text="Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."/>
        <Card title="Building Renovation" icon={<Building/>} text="Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."/>
        <Card title="Construciton Management" icon={<Cursor/>} text="Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."/>
      </div>
    </section>
  )
}

function Card({icon,title,text}) {
    return (
      <div className="p-10 border-2 border-primary-50">
        {icon}
        <h6 className="text-display-sm md:text-display-md mt-7 md:mt-20">{title}</h6>
        <p className="mt-4 text-body-lg font-light text-neutral-700 h-min">{text}</p>
      </div>
  );
}