import React from 'react';
import { ReactComponent as Arrow } from '../assets/icons/arrow.svg'

function Button({ children, type, classes = "" }, ref) {

    switch (type) {
        case "lg":
            return (
                <button ref={ref} className={'px-6 py-4 bg-primary-600 text-white transition duration-300 hover:brightness-110 ' + classes}>
                    <div className="flex items-center justify-center gap-1">
                        <span className='font-body text-body-sm font-semibold'>
                            {children}
                        </span>
                        <Arrow />
                    </div>
                </button>
            )
        case "md":
            return (
                <button ref={ref} className={'px-5 py-3 bg-primary-600 text-white transition duration-300 hover:brightness-110 ' + classes}>
                    <div className="flex items-center justify-center gap-1">
                        <span className='font-body text-body-xs font-semibold'>
                            {children}
                        </span>
                        <Arrow />
                    </div>
                </button>
            )
    }
}

export default React.forwardRef(Button);