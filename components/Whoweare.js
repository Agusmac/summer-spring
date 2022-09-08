import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';


export default function Whoweare() {


    const texts = ['urban trekking shoes and accessories','that comes from a convergence of','arts and personalities.']
   
    const [titleMoving, setTitleMoving] = useState(120)

    const { ref, inView } = useInView({
        rootMargin: '-150px',
    });

    useEffect(() => {
        if (inView) { setTitleMoving(0) }
    }, [inView])


    return (
        <div ref={ref} className='mr-[10%] ml-[7%] md:ml-[15%] lg:ml-[23%] mt-[24vw] md:mt-[16vw] text-[5.3vw] md:text-[4.3vw] tracking-tighter leading-[1.15]'>
            <div className='flex justify-between overflow-hidden'>
                <p className='duration-1000 md:mt-[1vw] ease-out text-lg md:text-3xl tracking-normal underline' style={{ transform: `translate3d(0px, ${titleMoving}%, 0px)` }}>WHO WE ARE</p>
                <h2 className='duration-1000 ease-out' style={{ transform: `translate3d(0px, ${titleMoving}%, 0px)` }}>An independent <span className='underline'>brand</span> of</h2>
            </div>
            {texts.map((item, i) => <div key={i} className='overflow-hidden'><h2 className='duration-1000 ease-out' style={{ transform: `translate3d(0px, ${titleMoving}%, 0px)` }}>{item}</h2></div>)}
        </div>
    )
}
