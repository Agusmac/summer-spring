import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';


export default function Double({ titleMoving, opacitier }) {

    const [imgScaling, setImgScaling] = useState(1)

    const [ref, inView] = useInView({
        rootMargin: '-300px',
    });
    const [ref2, inView2] = useInView({
        rootMargin: '-450px',
    });
    const [ref3, inView3] = useInView({
        rootMargin: '-150px',
    });

    useEffect(() => {
        if (inView) {setImgScaling(1.07)}
        if (inView2) {setImgScaling(1.1)}
        if (inView3) {setImgScaling(1.13)}
        if (!inView && !inView2 && !inView3) {setImgScaling(1)}
    }, [inView,inView2,inView3])


    return (
        <div className='flex justify-end mr-[10%] ml-[7%] md:ml-[15%] lg:ml-[23%]  gap-3 md:gap-14 relative'>

            <div className={`will-change-auto delay-300 duration-700 ease-out ${titleMoving ? 'opacity-0' : 'opacity-100'}`} style={{ transform: `translateY(${titleMoving}%)` }}>
                <div ref={ref} className={`border-[3px] border-black overflow-hidden `}>                                  
                    <Image priority={true} src='/yellow-pants.jpg' className='will-change-auto pres3d duration-[2000ms] ease-out' style={{
                        transform: `scale3d(${imgScaling}, ${imgScaling}, 1) `,
                    }} width={824} height={1166} quality={100} alt='yellow pants' />
                </div>
                <div  className='flex text-left md:mt-1 text-sm md:text-base'>
                    <h2 ref={ref3} className='flex-1'>(01)</h2>
                    <h2 className='flex-1'>MAN</h2>
                </div>
            </div>

            <div className={`will-change-auto delay-[400ms] duration-700 ease-out ${titleMoving ? 'opacity-0' : 'opacity-100'}`} style={{ transform: `translateY(${titleMoving}%)` }}>
                <div ref={ref2} className={`border-[3px] border-black overflow-hidden `}>
                    <Image priority={true} src='/red-pants.jpg' className='will-change-auto pres3d duration-[2000ms] ease-out' style={{
                        transform: `scale3d(${imgScaling}, ${imgScaling}, 1)`,
                    }} width={824} height={1166} quality={100} alt='red pants' />
                </div>
                <div className='flex text-left md:mt-1 text-sm md:text-base'>
                    <h2 className='flex-1 '>(02)</h2>
                    <h2 className='flex-1'>WMNS</h2>
                </div>
            </div>

            <div className={`absolute inset-0 grid place-content-center mix-blend-multiply duration-1000 ${opacitier ? 'opacity-0' : 'opacity-100'} max-w-[20%] md:max-w-[30%] mx-auto`}>
                <Image priority={true} src='/double-tape.svg' alt='tape' width={269} height={269} />
            </div>
        </div>
    )
}
