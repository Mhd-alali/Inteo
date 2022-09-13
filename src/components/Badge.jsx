import React, { useRef, useEffect } from "react";

import { ReactComponent as BadgeIcon } from '../assets/icons/badge.svg'
import { ReactComponent as Dimond } from '../assets/icons/dimond.svg'
import { infiniteSpin, spinOnHover } from "../animations";

function Badge() {
    const ref = useRef(null)

    useEffect(() => {
        infiniteSpin(ref)
        spinOnHover(ref,ref.current.querySelectorAll("svg")[1])
    }, [])

    return (
        <div ref={ref} className='max-w-min rounded-full relative'>
            <div>
                <BadgeIcon />
            </div>
            <div className='child:absolute child:top-1/2 child:left-1/2 child:-translate-y-1/2 child:-translate-x-1/2'>
                <Dimond />
            </div>
        </div>
    );
}

export default Badge;
