import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Loader() {

 
  const [translateNumber, setTranslateNumber] = useState(25)

  // const temp = [25, 50, 75]

  useEffect(() => {
    setTimeout(() => {
      stepper(0, 500)
    }, 350);
    setTimeout(() => {
      stepper(-25, 500)
    }, 700);
    setTimeout(() => {
      stepper(-50, 500)
    }, 1200);
    setTimeout(() => {
      stepper(-75, 500)
    }, 1600);

    setTimeout(() => {
      document.querySelector("#Loader").classList.add("LoaderAnimation");
    }, 1700);
  }, [])

  function stepper(number) {
    setTranslateNumber(number)
  }


  return (
    <div id='Loader' className=' will-change-auto fixed z-50 duration-1000 ease-in-out min-h-screen
         bg-[#141414] inset-0 text-white mx-auto text-center py-8 flex flex-col justify-between'>

      <div className='w-[77px] h-[77px] mx-auto'>
        <Image priority src='/orange-crown.svg' alt='orange-crown' width={77} height={77} />
      </div>

      <div className='h-40 md:h-72 overflow-hidden'>
        <div id='loadTitle' className='will-change-auto duration-[600ms] loaderTitleAnimation 
        text-[180px] leading-none md:text-[300px] text-[#fcf9ee] font-medium font-trailers'  style={{ transform: `translate3d(0px, ${translateNumber}%, 0px) ` }}>
          <p>30%</p>
          <p>68%</p>
          <p>87%</p>
          <p>100%</p>
        </div>
      </div>

      <div className='text-lg md:text-2xl leading-tight text-[#fcf9ee]'>
        <h3>© 2020 DÉPLACÈ MAISON.</h3>
        <h4>ALL RIGHTS RESERVED.</h4>
      </div>
    </div>
  )
}
