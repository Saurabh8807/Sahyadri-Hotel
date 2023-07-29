import React from 'react'
import './RestoInfo.css'
import RestoInfoImg from './RestoInfoImg.png' 

export default function RestoInfo() {
  return (
    <>
    <div className='RestoInfo'>
        <div className="RestoInfoPhoto">
            <img className='RestoInfoImg' src={RestoInfoImg} alt="" />
        </div>
        <div className="RestoInfoDesc">
            <h1 className='RestoInfoDesch1'>Asli Taste Restaurant</h1>
            <h3 className='RestoInfoDesch3'>Family Restaurant in Mumbai</h3>
            <p className='RestoInfoDescp'>Mumbai is the undisputed choice for honeymooners and regal enthusiasts. But with the right planning and a little bit of help from a professional holiday planner, this city of lakes does double up as an excellent family weekend getaway. And we, at Sahyadri , cater to the needs of leisure seekers, business owners and couples in equal measures. While our rooms have etched their claim to fame due to unmatched services at an unbeatable price, our restaurant helps us earn that cherry on the icing.</p>
            </div>
        {/* <button className='btn btn-primary RestoButton'> Book Table</button> */}
    </div>
    <div className='Enjoy'>
      <h1 className='Enjoyh1'>Enjoy the journey of taste</h1>
      <p className='Enjoyp'>We like to see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better.</p>
    </div>
    </>
  )
}
