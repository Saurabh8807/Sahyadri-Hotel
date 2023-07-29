import React from 'react'
import ImageSlider from '../Home/ImageSlider/ImageSlider'
import Info from '../Home/Info/Info'
import OurRooms from '../Home/OurRooms/OurRooms'
import Footer from '../Foot/Foot'

import './Home.css'
export default function Home() {
  return (
    <div className='home'>
    <ImageSlider/>
    <Info/>
    <OurRooms/>
<Footer/>

    </div>
  )
}
