import React, { useEffect, useState } from 'react'

import Double from './Double'
import Explore from './Explore/Explore'
import Title from './Title'

export default function Hero({setOpenInk}) {

    const [titleMoving, setNumber] = useState(100)
    const [opacitier, setOpacitier] = useState(1)
    useEffect(() => {
        setTimeout(() => {
            setNumber(0)
        }, 2400);
        setTimeout(() => {
            setOpacitier(0)
        }, 2900);
    }, [])

    return (
        <div className={`pt-[22%] md:pt-[8%] text-right`}>
            <Title titleMoving={titleMoving} opacitier={opacitier} setOpenInk={setOpenInk}/>
            <Double titleMoving={titleMoving} opacitier={opacitier} />
            <Explore />
          
        </div>
    )
}
