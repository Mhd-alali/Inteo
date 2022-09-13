import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import {ReactComponent as CtaIcon} from '../assets/icons/cta.svg'
import {ReactComponent as Arrow} from '../assets/icons/arrow.svg'

function Cta() {
    const ctaIconRef = useRef(null)

    useEffect(()=>{ 
        gsap.to(ctaIconRef.current,{duration:10,rotation:"360",ease:'none', repeat:-1})
    },[])

    return ( 
        <div className='bg-neutral-900 max-w-min rounded-full p-[5px] border-4 border-white relative'>
            <div ref={ctaIconRef} >
                <CtaIcon/>
            </div>
            <div className='child:absolute child:top-1/2 child:left-1/2 child:-translate-y-1/2 child:-translate-x-1/2 child:scale-150'>  
                <Arrow/>
            </div>
        </div>
     );
}

export default Cta;