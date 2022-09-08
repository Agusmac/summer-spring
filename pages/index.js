import Head from 'next/head'
import DoubleReview from '../components/DoubleReview'
import Footer from '../components/Footer/Footer'
import Explore from '../components/Hero/Explore/Explore'
import Hero from '../components/Hero/Hero'
import ItemLine from '../components/Hero/ItemLine'
import Loader from '../components/Loader'
import Goo from '../components/Goo'
import Whoweare from '../components/Whoweare'
import YellowBand from '../components/YellowBand'
import Layer from '../components/Layer'
import { useState } from 'react'

export default function Home() {

  const [openInk, setOpenInk] = useState(true)
  const [openSidebar, setOpenSidebar] = useState(true)

  // bg-slate-500 md:bg-[#db7f5a] lg:bg-[#fcf9ee]
  return (
    <>
      <div className='bg-[#fcf9ee] min-h-screen overflow-x-hidden md:cursor-none'>
        <Hero setOpenInk={setOpenInk} />
        <YellowBand />
        <Whoweare />
        <ItemLine />
        <Explore text='SHOP ALL' />
        <DoubleReview />
        <Footer setOpenSidebar={setOpenSidebar} />
        <div className='hidden md:block'>
          <Goo />
        </div>
        <Layer openInk={openInk} openSidebar={openSidebar} />
      </div>
      <Loader />

    </>
  )
}
