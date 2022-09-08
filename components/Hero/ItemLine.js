import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

export default function ItemLine() {

    // const [onView, setOnView] = useState(false)
    // const { ref, inView } = useInView({
    //     rootMargin: '-50px',
    // });

    // useEffect(() => {
    //     if (inView) { setOnView(true) }
    // }, [inView])


    return (
            <div  className={`p-2 ease-out duration-[1300ms] bg-[#dddddd] mt-[13vw]  md:mt-[9vw] text-xs md:text-base mb-[5vw] ml-[7%] md:ml-[15%] lg:ml-[23%]   
  
            `} >
                NO ITEMS AVAILABLE!
            </div>

    )
}
// ref={ref}
      //    translate-x-[1%] ${!onView && '' }