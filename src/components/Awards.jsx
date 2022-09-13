import React from 'react';

import {ReactComponent as German} from '../assets/icons/german.svg'
import {ReactComponent as Golda} from '../assets/icons/golda.svg'
import {ReactComponent as If} from '../assets/icons/If.svg'
import {ReactComponent as Good} from '../assets/icons/good.svg'

function Awards() {
    const awards = [
        {icon:<German/>,agency:'German Design Award',year:"2021"},
        {icon:<Golda/>,agency:"Gold'A Design Award",year:"2021"},
        {icon:<If/>,agency:'IF Design Award',year:"2020"},
        {icon:<Good/>,agency:'Good Design Award',year:"2019"},
    ]

    return (
        <div className="flex justify-between items-center gap-5 py-6">
            <div className="self-start md:self-center flex items-center relative pt-6 md:p-0">
                <h3 className='italic text-display-xs text-primary-300 -rotate-90 '>Awards</h3>
                <hr className='b-2 border border-primary-300 md:w-20 w-10 '/>
            </div>
            <div className="grid grid-rows-4 md:grid-rows-2 md:grid-cols-2 gap-16 lg:grid-cols-4 lg:grid-rows-1 w-full items-center font-body text-body-sm text-neutral-300">
                 {
                    awards.map(award => <Award key={award.agency} icon={award.icon} year={award.year} agency={award.agency}/>)
                 }
            </div>
        </div>
     );
}

export default Awards;

function Award({icon,year,agency}) {
    return <div className="flex items-center gap-2">
        <div className="w-20">
            {icon}
        </div>
        <p className='lg:whitespace-nowrap'>{agency}<br />{year}</p>
    </div>;
}