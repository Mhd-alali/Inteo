import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef } from "react";

import { ReactComponent as Load } from '../assets/icons/load.svg'

export default function Loading({ isLoading }) {

  const ref = useRef(null)

  useLayoutEffect(() => {
    gsap.set(ref.current.querySelectorAll("svg"), { transformBox: 'fill-box' })
    gsap.set(ref.current.querySelectorAll("#circle1,#circle2,#circle3"), { transformOrigin: "center" })

    gsap.fromTo(ref.current.querySelectorAll("#circle1"),{scale:.3},{ scale: 1.2, duration: .8, repeat: -1, yoyo: true, ease: 'power1.in', delay: 0 })
    gsap.fromTo(ref.current.querySelectorAll("#circle2"),{scale:.3},{ scale: 1.2, duration: .8, repeat: -1, yoyo: true, ease: 'power1.in', delay: .4 })
    gsap.fromTo(ref.current.querySelectorAll("#circle3"),{scale:.3},{ scale: 1.2, duration: .8, repeat: -1, yoyo: true, ease: 'power1.in', delay: .8 })

  }, [])

  useEffect(() => {
    if (!isLoading) {
      gsap.to(ref.current, { duration: 2, borderBottomLeftRadius: "10%", borderBottomRightRadius: "10%" })
      gsap.to(ref.current, { yPercent: -100, })
    }
  }, [isLoading])

  return (
    <div ref={ref} className="fixed z-50 top-0 left-0 w-screen bg-white h-screen flex flex-col items-center justify-center text-4xl font-body">
      <Load />
    </div>
  );
}
