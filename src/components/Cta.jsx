import React, { useEffect, useRef } from 'react';

import { ReactComponent as CtaIcon } from '../assets/icons/cta.svg'
import { ReactComponent as Arrow } from '../assets/icons/arrow.svg'
import {infiniteSpin, spinOnHover} from '../animations';

function Cta() {
    const ref = useRef(null)

    useEffect(() => {
        infiniteSpin(ref)
        spinOnHover(ref,ref.current.querySelectorAll("svg")[1])
    }, [])

    return (
        <div ref={ref} className='bg-neutral-900 max-w-min rounded-full p-[5px] border-4 border-white relative'>
            <div >
                <CtaIcon />
            </div>
            <div className='child:absolute child:top-1/2 child:left-1/2 child:-translate-y-1/2 child:-translate-x-1/2 child:scale-150'>
                <Arrow />
            </div>
        </div>
    );
}

export default Cta;