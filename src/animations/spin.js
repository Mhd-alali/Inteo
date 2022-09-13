import gsap from "gsap"

/**
 * adding a infinite spin animation to an element that accelerate when hovered
 * @param {import("react").MutableRefObject} a refrence to the element you want to animate
 */
export function infiniteSpin(ref,duration = 10) {
    const tl = gsap.timeline({ defaults: { duration } })

    tl.to(ref.current.querySelector("div"), { rotation: "360", ease: 'none', repeat: -1 })

    function handleEnter(args) {
        tl.timeScale(2.5)
    }
    function handleLeave(args) {
        tl.timeScale(1)
    }
    
    ref.current.addEventListener("mouseenter", handleEnter)
    ref.current.addEventListener("mouseleave", handleLeave)
    
    return () => {
        ref.current.removeEventListener("mouseenter", handleEnter)
        ref.current.removeEventListener("mouseleave", handleLeave)
    }
}

/**
 * 360 spin on hover
 * @param {*} ref the element that you hover
 * @param {*} target the element that will animate defaltly its ref
 */
export function spinOnHover(ref,target = ref) {
    function handleEnter(args) {
        gsap.to(target,{rotate:"360deg"})
    }

    function handleLeave(args) {
        gsap.to(target,{rotate:"-0deg"})
    }
    
    ref.current.addEventListener("mouseenter",handleEnter)
    ref.current.addEventListener("mouseleave",handleLeave)

    return ()=> {
        ref.current.removeEventListener("mouseenter",handleEnter)
        ref.current.removeEventListener("mouseleave",handleLeave)
    }
}