import React from 'react'

export default function YellowBand() {

    const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

    return (
        <div className='mt-28 md:mt-40 w-full text-3xl md:text-5xl whitespace-nowrap overflow-hidden  tracking-tighter py-3  md:py-5 bg-[#ddc92a] border-y-[3px]  border-black'>
            <div className='flex hmmm'>
                {temp.map(i => <h3 key={i}>·&nbsp;&nbsp;DEPLACE SHOP&nbsp;&nbsp;·&nbsp;&nbsp;DO NOT SCROLL&nbsp;&nbsp;</h3>)}
            </div>
        </div>
    )
}
