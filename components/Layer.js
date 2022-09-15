import Image from 'next/image';
import { useEffect } from 'react';
import alert from './Alert';


export default function Layer({ openInk, openSidebar }) {

    const temp = ['SHOP', 'COLLECTIONS', 'ABOUT'];

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#skrrty").classList.remove('skrrt-y-fake')
        }, 2300);
    }, [])

    return (
        <div className='z-10'>
            <div className={`hidden lg:inline-block fixed bottom-10 tracking-tight duration-700 ${openSidebar ? 'left-10' : '-left-32'}  space-y-1`}>
                {temp.map((item, i) => (
                    <div key={i} onClick={alert} className='overflow-hidden h-6'>
                        <div className='duration-700 ease-out skrrt-skrrt pr-4'>
                            <h2 >{item}</h2>
                            <h2 className='rotate-[5deg]'>{item}</h2>
                        </div>
                    </div>))}
            </div>

            <div className='fixed top-8 lg:top-10 left-6 lg:left-10'>
                {/* deplace-logo-hor.svg */}
                <div className='inline-block lg:hidden max-w-[22vw]'>
                    <Image src='/deplace-logo-hor.svg' alt='deplace-logo' height={46} width={134} />
                </div>
                <div className='hidden lg:inline-block overflow-hidden w-[62px] '>
                    <div id='skrrty' className='duration-700 ease-out skrrt-skrrt-y skrrt-y-fake  flex'>
                        <div className='min-w-[64px]'>
                            <Image src='/deplace-logo.svg' alt='deplace-logo' height={178} width={62} />
                        </div>
                        <div className='min-w-[64px] rotate-[5deg]'>
                            <Image src='/deplace-logo.svg' alt='deplace-logo' height={178} width={62} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`hidden lg:flex fixed ${openInk ? 'top-10' : '-top-10'} duration-700  mx-auto left-0 right-0  justify-center`}>
                <div className='font-ciberthrone text-2xl ink-mode p-3 pt-0'>INK MODE</div>
            </div>

            <div onClick={alert} className={`lg:hidden fixed w-[35px] h-[25px] top-10 mx-auto left-0 right-0 flex justify-center flex-col space-y-1`}>
                <div className='bg-black h-[2px] w-1/2'></div>
                <div className='bg-black h-[2px] w-full'></div>
                <div className='bg-black h-[2px] w-1/2 self-end'></div>
            </div>

            <div onClick={alert} className='fixed top-10  right-10 lg:right-16 flex space-x-3  '>
                <div className='overflow-hidden h-5'>
                    <div className='duration-700 ease-out skrrt-skrrt md:pr-4'>
                        <h2>CART</h2>
                        <h2 className='rotate-[5deg]'>CART</h2>
                    </div>
                </div>
                <div className='font-bold'>0</div>
            </div>

        </div>
    )
}
