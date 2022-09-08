import React from 'react'

export default function SkrrtDiv({title,t1,t2,t3,foot}) {
    return ( 
        <div className='flex-1 tracking-tighter flex flex-col justify-between'>
            <div>
                <p className=' md:text-xl mb-6'>{title}</p>
                <div className='text-2xl md:text-4xl space-y-3'>

                    <div className='overflow-hidden h-7 md:h-11'>
                        <div className='duration-[850ms] ease-out skrrt-skrrt space-y-4'>
                            <h2 className=' '>{t1}</h2>
                            <h2 className='rotate-[5deg]'>{t1}</h2>
                        </div>
                    </div>

                    <div className='overflow-hidden h-7 md:h-11'>
                        <div className='duration-[850ms] ease-out skrrt-skrrt space-y-4'>
                            <h2 className=' '>{t2}</h2>
                            <h2 className='rotate-[5deg]'>{t2}</h2>
                        </div>
                    </div>

                    <div className='overflow-hidden h-7 md:h-11'>
                        <div className='duration-[850ms] ease-out skrrt-skrrt space-y-4'>
                            <h2 className=' '>{t3}</h2>
                            <h2 className='rotate-[5deg]'>{t3}</h2>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='md:text-xl tracking-tighter'>{foot}</div>
        </div>
    )
}
