import React from 'react'
import alert from '../../Alert'
import Rotator from './Rotator'

export default function Explore({ text }) {

    return (
        <div className='mr-[10%] mt-14 flex justify-end text-3xl tracking-tighter space-x-8 items-center'>
            <div onClick={alert} className='under-lined'>{text || 'EXPLORE'}</div>
            <Rotator />
        </div>
    )
}
// rotate-[17deg]
