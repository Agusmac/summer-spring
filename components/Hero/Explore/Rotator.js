import React, { useState } from 'react'
import Image from 'next/image'
import alert from '../../Alert'

export default function Rotator({ vertical }) {

    const [onHover, setOnHover] = useState(0)

    return (
        <div>
            <div onClick={alert} className={`relative flex max-w-[15vw] z-20  ${vertical ? 'rotate-[-90deg]' : ''}`} onMouseOver={() => setOnHover(1)} onMouseLeave={() => setOnHover(0)} >
                <div className={`duration-500 ease-out ${onHover && 'scale-[1.2]'}`}>
                    <Image src='/circle.svg' width={100} height={100} alt={'circle'} />
                </div>
                <div className={`absolute inset-0 grid place-content-center max-w-[50%] mx-auto duration-500 ease-out   ${onHover && 'rotate-[360deg]'}`}>
                    <Image className='' src='/right-arrow.svg' width={48} height={48} alt={'arrow right'} />
                </div>
            </div>
        </div>
    )
}
