import Image from 'next/image'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

import Rotator from '../Hero/Explore/Rotator'
import SkrrtDiv from './SkrrtDiv'




export default function Footer({ setOpenSidebar }) {

    const [ref, inView] = useInView({
        rootMargin: '+50px',
    });

    useEffect(() => {
        if (inView) { setOpenSidebar(false) }
        else { setOpenSidebar(true) }
    }, [inView,setOpenSidebar])

    return (
        <div ref={ref} className='noised relative z-40 md:pt-12 lg:pt-24'>

            <div className='min-h-[400px] md:min-h-[500px] pb-14 pt-20 flex pl-[4vw]'>
                <div className='hidden lg:flex flex-col justify-between flex-1'>
                    <div>
                        <p className='text-xl tracking-tighter'>SUBSCRIBE TO NEWSLETTER</p>
                        <br />
                        <div className='w-[77px]'><Image src='/message.svg' height={49} width={77} alt={'envelope'} /></div>
                    </div>
                    <div>
                        <p className='tracking-[-0.03em]'>SUBSCRIBE TO OUR NEWSLETTER</p>
                        <div className='flex justify-between items-end w-11/12 max-w-[560px] pb-5 pt-6 border-b border-[#141414]'>
                            <p className='text-3xl text-[#999] tracking-tighter ml-4 mb-3'>email address</p>
                            <p>SUBMIT</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-[1.3_1.3_0%] justify-between'>

                    <SkrrtDiv title={'INFO'} t1={'FAQ'} t2={'RETURNS'} t3={'CONTACT'} foot={'CREDITS'} />
                    <SkrrtDiv title={'POLICY'} t1={'TERMS'} t2={'PRIVACY'} t3={'COOKIE'} foot={'© 2020 DÉPLACÉ MAISON.'} />

                    {/* arrow */}
                    <div className='flex-1 flex flex-col justify-between'>
                        <div className='flex justify-center md:justify-start'>
                            <Rotator vertical />
                        </div>
                        <div className='flex space-x-3 justify-center md:justify-start'>
                            <Image alt={'facebook logo'} src='/facebook-logo.svg' height={36} width={36} />
                            <Image alt={'instagram logo'} src='/insta-logo.svg' height={36} width={36} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
