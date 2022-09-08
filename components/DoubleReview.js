import Image from 'next/image'
import React from 'react'

export default function DoubleReview() {


    return (
        <div className='flex justify-end overflow-hidden items-center mb-10 md:mb-40 ml-[5%] mr-[5%] md:mr-[10%] mt-[7vw]'>
            <Image priority src='/double-mark.svg' width={144} height={144} alt={'double mark'}/>
            <div className='font-ciberthrone ty-looper  text-2xl md:text-7xl duration-700 px-2 whitespace-nowrap relative leading-none -left-[8vw]  md:-left-[4vw] translate-y-[30%] '>
                <h2 className='op-looper'>WiLLiAm GIbSoN</h2>
                <br />
                <h2  className='op-looper-2'>JAmiE K. CoHen</h2>
            </div>

            <div className='w-[480px] max-w-[80vw] ty-looper text-sm md:text-xl lg:text-2xl leading-tight tracking-[-0.04em] duration-700 translate-y-1/4'>
                <p className='op-looper'>Good things come to those who wait – Déplacé Maison is what has been missing in the modern fashion industry for years. Buy a shoe of high quality and design it finally happened.</p>
                <br />
                <br />
                <p className='op-looper-2'>Déplacé Maison is a convincer for anticipation. The urban trekking as nevers seen before. An exceptional product that has no equal alongside a great team represent the brand professionally. </p>
            </div>
        </div>
    )
}
