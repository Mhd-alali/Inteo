import React,{useRef,useEffect} from "react";
import gsap from "gsap";

import {ReactComponent as BadgeIcon} from '../assets/icons/badge.svg'
import {ReactComponent as Dimond} from '../assets/icons/dimond.svg'

function Badge() {
    const badgeIconRef = useRef(null)

    useEffect(()=>{ 
        gsap.to(badgeIconRef.current,{duration:10,rotation:"360",ease:'none', repeat:-1})
    },[])

    return ( 
        <div className='max-w-min rounded-full relative'>
            <div ref={badgeIconRef} >
                <BadgeIcon/>
            </div>
            <div className='child:absolute child:top-1/2 child:left-1/2 child:-translate-y-1/2 child:-translate-x-1/2'>  
                <Dimond/>
            </div>
        </div>
     );
}

export default Badge;
