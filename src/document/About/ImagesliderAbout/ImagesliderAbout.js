import React from 'react'
import About_Image from './About_Image.jpg'
import './ImagesliderAbout.css'
import Flip from 'react-reveal/Flip';

export default function ImagesliderAbout() {
  return (
        <Flip left>
    <div class="about_image">
        <img src={About_Image} class="card-img" alt="..."/>
        <div>
            <h5 class="card-title1">Your Perfect Stay In Mumbai</h5>
        </div>
    </div>
        </Flip>
  )
}
