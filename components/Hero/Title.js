import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';


export default function Title({ titleMoving, opacitier,setOpenInk }) {

    const [ref, inView] = useInView({
        rootMargin: '-50px',
    });

    useEffect(() => {
        if (inView) {setOpenInk(true)}
        else{setOpenInk(false)}
    }, [inView,setOpenInk])

    return (
        <>
            <div className='overflow-hidden px-[10vw]'>
                <h1 className='will-change-auto tracking-[-.1em] text-[17vw] md:text-[14vw] leading-none duration-1000'
                    style={{ transform: `translateY(${titleMoving}%)` }}
                >SPRING</h1>
            </div>
            <div className='flex justify-end overflow-hidden relative -top-[6vw]  md:-top-[3.55vw] px-[10vw] pt-7'>
                <h1 ref={ref} className='will-change-auto tracking-[-.11em] text-[17vw] md:text-[14vw] leading-none  duration-1000'
                    style={{ transform: `translateY(${titleMoving}%)` }}
                >SUMMER</h1>
                <div className={`text-[5vw] md:text-[4vw] leading-[.88] tracking-[-.07em] ml-3 md:ml-7 mt-[2.5vw] md:mt-[2.5vw] duration-1000 ${opacitier ? 'opacity-0' : 'opacity-100'}`}>
                    <h2>COLL.</h2>
                    <h2>2022</h2>
                </div>
            </div>
        </>
    )
}
